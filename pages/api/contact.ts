import type { NextApiRequest, NextApiResponse } from "next";
import RateLimit from "express-rate-limit";
import SlowDown from "express-slow-down";
import { Telegraf } from "telegraf";
import { isFormInputs } from "@shared/types";

const ONE_DAY = 24 * 60 * 60 * 1000;

const rateLimit = RateLimit({
  windowMs: ONE_DAY,
  message: {
    status: 429,
    message: "Too many requests, please try again later.",
    error: "Rate limit exceeded.",
  },
});
const slowDown = SlowDown({ windowMs: ONE_DAY });

const telegramBot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "");

telegramBot.launch();
process.on("SIGINT", () => telegramBot.stop("SIGINT"));
process.on("SIGTERM", () => telegramBot.stop("SIGTERM"));

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: unknown) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await runMiddleware(req, res, slowDown);
  await runMiddleware(req, res, rateLimit);

  const { body: formData, method } = req;
  switch (method) {
    case "POST": {
      if (!isFormInputs(formData)) {
        return res
          .status(400)
          .json({ error: "Request body is missing one of the following fields: email, message" });
      }
      const messageTemplate = `${formData.email} has left the following message: \n${formData.message}`;
      telegramBot.telegram.sendMessage(process.env.TELEGRAM_USER_ID || 0, messageTemplate);
      res.status(200).json({ status: 200, message: formData });
      break;
    }
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
