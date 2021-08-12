import { GitHubIcon, MailIcon } from "./Icons";
import LinkButton from "./LinkButton";
import { EMAIL, GITHUB_PROFILE } from "@utils/PublicData";

const LINKS = [
  { Icon: GitHubIcon, href: GITHUB_PROFILE, label: "GitHub" },
  { Icon: MailIcon, href: `mailto:${EMAIL}`, label: "Email" },
];

const ContactForm = (): JSX.Element => {
  return (
    <div className="flex flex-col h-full justify-center mt-8">
      <div className="rounded flex flex-col max-w-screen-md">
        <p className="text-base font-light italic border-l-4 border-gray-400 pl-2">
          Hey there, thanks for stopping by! If you wish to get in touch, feel free to leave me a
          message below.
        </p>
        <div className="flex flex-col mt-8">
          <label htmlFor="EmailInput" className="text-sm tablet:text-base">
            Email
          </label>
          <input
            type="text"
            id="EmailInput"
            className="rounded p-2 bg-shark-400 outline-none mt-1"
          />
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="MessageInput" className="text-sm tablet:text-base">
            Message
          </label>
          <textarea
            name=""
            id="MessageInput"
            className="rounded p-2 bg-shark-400 outline-none mt-1 h-28 tablet:h-40"
          ></textarea>
        </div>
        <button className="rounded font-bold bg-jungle-green-500 px-3 py-2 mt-4 text-shark-500 duration-300 ease-in-out hover:text-jungle-green-500 hover:bg-shark-400">
          Submit
        </button>
        <span className="text-xs text-gray-500 mt-3 tablet:text-sm">
          I will try to respond within 3 working days. If the matter is urgent do consider sending
          me a direct email.
        </span>
      </div>
      <div className="flex justify-start mt-12 space-x-2 tablet:mt-16 tablet:space-x-4 tablet:justify-start">
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
      </div>
    </div>
  );
};

export default ContactForm;
