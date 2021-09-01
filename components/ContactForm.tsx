import { SubmitHandler, useForm } from "react-hook-form";
import { motion, AnimatePresence, AnimateSharedLayout, Variants } from "framer-motion";
import { GitHubIcon, MailIcon } from "./Icons";
import LinkButton from "./LinkButton";
import { EMAIL, GITHUB_PROFILE } from "@utils/PublicData";
import { useState } from "react";

const LINKS = [
  { Icon: GitHubIcon, href: GITHUB_PROFILE, label: "GitHub" },
  { Icon: MailIcon, href: `mailto:${EMAIL}`, label: "Email" },
];

interface FormInputs {
  email: string;
  message: string;
}

const fadeInVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const ContactForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onSubmit", reValidateMode: "onBlur" });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    setLoading(true);
    console.log(data);
    // # TODO call api
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full justify-center mt-8">
      <AnimateSharedLayout>
        <motion.div className="flex flex-col max-w-screen-md" layout>
          <p className="text-base font-light italic border-l-4 border-gray-400 pl-2">
            Hey there, thanks for stopping by! If you wish to get in touch, feel free to leave me a
            message below.
          </p>
          <motion.form onSubmit={handleSubmit(onSubmit)} layout>
            <motion.div className="flex flex-col mt-8 " layout>
              <motion.label htmlFor="EmailInput" className="tablet:text-lg" layout>
                Email
              </motion.label>
              <motion.input
                layout
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Hmm, I gotta know who is leaving the message though...",
                  },
                  pattern: {
                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: "Hmm, you might want to check your email address again.",
                  },
                })}
                id="EmailInput"
                className="rounded p-2 bg-shark-400 outline-none mt-2"
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.div
                    layout
                    variants={fadeInVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-500"
                  >
                    <span>{errors.email.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.div className="flex flex-col mt-4" layout>
              <motion.label htmlFor="MessageInput" className="tablet:text-lg" layout>
                Message
              </motion.label>
              <motion.textarea
                id="MessageInput"
                {...register("message", {
                  required: {
                    message: "Huh? There's no point in leaving a blank message?",
                    value: true,
                  },
                })}
                className="rounded p-2 bg-shark-400 outline-none mt-1 h-28 tablet:h-40"
                layout
              ></motion.textarea>
              <AnimatePresence>
                {errors.message && (
                  <motion.div
                    layout
                    variants={fadeInVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="text-sm text-gray-500"
                  >
                    <span>{errors.message.message}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <motion.button
              className="rounded font-bold bg-jungle-green-500 px-3 py-2 mt-4 text-shark-500 duration-300 ease-in-out hover:text-jungle-green-500 hover:bg-shark-400 flex w-full justify-center items-center disabled:bg-shark-300 disabled:text-jungle-green-500 disabled:cursor-not-allowed"
              type="submit"
              layout
              disabled={loading}
            >
              Submit
              <AnimatePresence>
                {/* # TODO show success/failure message */}
                {loading && (
                  <motion.div
                    className="rounded-full border-4 border-t-4 border-jungle-green-200 border-t-jungle-green-500 h-5 w-5 animate-spin ml-2"
                    variants={fadeInVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.form>

          <motion.span className="text-xs text-gray-500 mt-3 tablet:text-sm" layout>
            I will try to respond within 3 working days. If the matter is urgent do consider sending
            me a direct email.
          </motion.span>
        </motion.div>
        <motion.div
          className="flex justify-start mt-12 space-x-2 tablet:mt-16 tablet:space-x-4 tablet:justify-start"
          layout
        >
          {LINKS.map(({ Icon, href, label }) => (
            <LinkButton
              label={label}
              icon={<Icon className="w-6 h-6 tablet:w-8 tablet:h-8" />}
              href={href}
              target="_blank"
              rel="noreferrer"
              key={label}
            />
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default ContactForm;
