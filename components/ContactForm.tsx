import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { m, AnimatePresence, AnimateSharedLayout, Variants } from "framer-motion";
import { FormInputs } from "@shared/types";
import { ContactIcon, GitHubIcon } from "./Icons";
import LinkButton from "./LinkButton";
import { Links } from "@lib/mdx";

const fadeInVariant: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const fadeInMotionProps = {
  layout: true,
  variants: fadeInVariant,
  initial: "initial",
  animate: "animate",
  exit: "exit",
  transition: { duration: 0.5 },
};

enum FormState {
  INITIAL,
  LOADING,
  SUCCESS,
  ERROR,
}

interface ContactFormProps {
  links: Links;
}

const ContactForm = ({ links }: ContactFormProps): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: "onSubmit", reValidateMode: "onBlur" });
  const [formState, setFormState] = useState(FormState.INITIAL);

  const LINKS = useMemo(
    () => [
      { Icon: GitHubIcon, href: links.github, label: "GitHub" },
      { Icon: ContactIcon, href: `mailto:${links.email}`, label: "Email" },
    ],
    [links]
  );

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setFormState(FormState.LOADING);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      setFormState(FormState.SUCCESS);
    } else {
      setFormState(FormState.ERROR);
    }
    setTimeout(() => {
      setFormState(FormState.INITIAL);
    }, 4000);
  };

  const ButtonContent = (): JSX.Element => {
    switch (formState) {
      case FormState.INITIAL: {
        return (
          <m.span {...fadeInMotionProps} key={FormState.INITIAL}>
            Submit
          </m.span>
        );
      }
      case FormState.LOADING: {
        return (
          <m.div
            className="rounded-full border-4 border-t-4 border-primary-200 border-t-primary-500 h-6 w-6 animate-spin mr-2"
            key={FormState.LOADING}
            {...fadeInMotionProps}
          ></m.div>
        );
      }
      case FormState.SUCCESS: {
        return (
          <m.span key={FormState.SUCCESS} {...fadeInMotionProps}>
            You have left a message.
          </m.span>
        );
      }
      case FormState.ERROR: {
        return (
          <m.span key={FormState.ERROR} {...fadeInMotionProps}>
            Huh... Try again in awhile.
          </m.span>
        );
      }
    }
  };

  return (
    <div className="flex flex-col h-full justify-center mt-8">
      <AnimateSharedLayout>
        <m.div className="flex flex-col max-w-screen-md" layout>
          <m.p className="text-base font-light italic border-l-4 border-gray-400 pl-2" layout>
            Hey there, thanks for stopping by! If you wish to get in touch, feel free to leave me a
            message below.
          </m.p>
          <m.form onSubmit={handleSubmit(onSubmit)} layout>
            <m.div className="flex flex-col mt-8 " layout>
              <m.label htmlFor="EmailInput" className="tablet:text-lg" layout>
                Email
              </m.label>
              <m.input
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
                  <m.div {...fadeInMotionProps} className="text-sm text-gray-500">
                    <span>{errors.email.message}</span>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
            <m.div className="flex flex-col mt-4" layout>
              <m.label htmlFor="MessageInput" className="tablet:text-lg" layout>
                Message
              </m.label>
              <m.textarea
                id="MessageInput"
                {...register("message", {
                  required: {
                    message: "Huh? There's no point in leaving a blank message?",
                    value: true,
                  },
                })}
                className="rounded p-2 bg-shark-400 outline-none mt-1 h-28 tablet:h-40"
                layout
              ></m.textarea>
              <AnimatePresence>
                {errors.message && (
                  <m.div {...fadeInMotionProps} className="text-sm text-gray-500">
                    <span>{errors.message.message}</span>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
            <m.button
              className="rounded font-bold bg-primary-500 px-3 py-2 mt-4 text-shark-500 duration-300 ease-in-out hover:text-primary-500 hover:bg-shark-400 flex w-full justify-center items-center disabled:bg-shark-300 disabled:text-primary-500 disabled:cursor-not-allowed"
              type="submit"
              layout
              disabled={formState === FormState.LOADING}
            >
              <AnimatePresence exitBeforeEnter initial={false}>
                <ButtonContent />
              </AnimatePresence>
            </m.button>
          </m.form>

          <m.span className="text-xs text-gray-500 mt-3 tablet:text-sm" layout>
            I will try to respond within 3 working days. If the matter is urgent do consider sending
            me a direct email.
          </m.span>
        </m.div>
        <m.div className="flex justify-start mt-12 gap-2 tablet:mt-16 tablet:gap-4" layout>
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
        </m.div>
      </AnimateSharedLayout>
    </div>
  );
};

export default ContactForm;
