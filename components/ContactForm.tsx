import React from "react";
import { GitHubIcon, MailIcon } from ".";

const ContactForm: React.FC = () => {
  return (
    <>
      <h1 className="text-5xl font-black uppercase">Contact</h1>
      <div className="flex flex-col h-full justify-center flex-grow mt-12">
        <div className="px-8 rounded flex flex-col">
          <p className="text-sm font-light italic border-l-4 border-gray-400 pl-2">
            Hey there, thanks for stopping by! If you wish to get in touch, feel free to leave me a
            message below. :)
          </p>
          <div className="flex flex-col mt-8">
            <label htmlFor="EmailInput" className="text-sm font-thin">
              Email
            </label>
            <input
              type="text"
              id="EmailInput"
              className="rounded py-1 px-2 bg-shark-400 outline-none mt-1"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="MessageInput" className="text-sm font-thin">
              Message
            </label>
            <textarea
              name=""
              id="MessageInput"
              className="rounded py-1 px-2 bg-shark-400 outline-none mt-1"
              rows={4}
            ></textarea>
          </div>
          <button className="rounded font-bold bg-jungle-green-500 px-3 py-2 mt-4 text-shark-500">
            Submit
          </button>
          <span className="text-xs text-gray-500 mt-3 ">
            I will try to respond within 3 working days. If the matter is urgent do consider sending
            me a direct email.
          </span>
        </div>
        <div className="flex px-8 justify-around mt-8">
          <div className="flex items-center flex-1 justify-center">
            <a href="https://github.com/leo-dh" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full w-min bg-gray-100">
                <GitHubIcon width="32" height="32" className="text-gray-700" />
              </div>
            </a>
            <span className="ml-2">
              <a href="https://github.com/leo-dh" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </span>
          </div>
          <div className="flex items-center flex-1 justify-center">
            <a href="mailto:leo.ding.hao.2014@gmail.com" target="_blank" rel="noreferrer">
              <div className="p-2 rounded-full w-min bg-gray-100">
                <MailIcon width="32" height="32" className="text-gray-700" />
              </div>
            </a>
            <span className="ml-2">
              <a href="mailto:leo.ding.hao.2014@gmail.com" target="_blank" rel="noreferrer">
                Email
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
