import React, { HTMLProps } from "react";
import { GitHubIcon, MailIcon } from "./Icons";

const ContactSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  return (
    <section className={`min-h-screen flex flex-col py-12 ${className}`} {...props}>
      <h1 className="text-5xl font-black text-gray-400 uppercase">Contact</h1>
      <div className="flex flex-col h-full justify-center flex-grow mt-12">
        <div className="px-8 rounded flex flex-col">
          <p className="text-sm font-light italic border-l-4 border-gray-400 pl-2">
            Hey there, thanks for stopping by! If you wish to get in touch, feel free to leave me a
            message below. :)
          </p>
          <div className="flex flex-col mt-8">
            <label htmlFor="EmailInput" className="text-sm text-gray-600 font-thin">
              Email
            </label>
            <input
              type="text"
              id="EmailInput"
              className="rounded border-gray-300 border py-1 px-2 text-gray-700 outline-none mt-1"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="MessageInput" className="text-sm text-gray-600 font-thin">
              Message
            </label>
            <textarea
              name=""
              id="MessageInput"
              className="rounded border-gray-300 border py-1 px-2 text-gray-700 outline-none mt-1"
              rows={4}
            ></textarea>
          </div>
          <button className="rounded bg-gray-400 px-3 py-2 mt-4 text-gray-800">Submit</button>
          <span className="text-xs text-gray-600 mt-3 ">
            I will try to respond within 3 working days. If the matter is urgent do consider sending
            me a direct email.
          </span>
        </div>
        <div className="flex px-8 justify-around mt-8">
          <div className="flex items-center flex-1 justify-center">
            <div className="p-2 rounded-full w-min bg-gray-100">
              <GitHubIcon width="32" height="32" className="text-gray-700" />
            </div>
            <span className="ml-2">GitHub</span>
          </div>
          <div className="flex items-center flex-1 justify-center">
            <div className="p-2 rounded-full w-min bg-gray-100">
              <MailIcon width="32" height="32" className="text-gray-700" />
            </div>
            <span className="ml-2">Email</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
