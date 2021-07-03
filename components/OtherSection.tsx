import React, { HTMLProps } from "react";
import Link from "next/link";
import { ContactIcon, AboutIcon } from "./Icons";

const LINKS = [
  {
    title: "About Me",
    href: "/about",
    icon: <AboutIcon />,
  },
  {
    title: "Contact Me",
    href: "/contact",
    icon: <ContactIcon />,
  },
];

const OtherSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  return (
    <section className={`flex flex-col py-12 ${className}`} {...props}>
      <h1 className="text-4xl font-black uppercase">Other</h1>
      <div className="flex flex-col px-8 space-y-2 mt-8">
        {LINKS.map(({ title, href, icon }, index) => (
          <Link href={href} key={index}>
            <a className="flex bg-shark-400 rounded-md py-2 px-2 uppercase font-light items-center">
              <div className="text-gray-500 mr-2">{icon}</div>
              {title}
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OtherSection;
