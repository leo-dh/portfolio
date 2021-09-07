import { HTMLProps } from "react";
import Link from "next/link";
import { ContactIcon, AboutIcon } from "./Icons";

const LINKS = [
  {
    title: "About Me",
    href: "/about",
    Icon: AboutIcon,
  },
  {
    title: "Contact Me",
    href: "/contact",
    Icon: ContactIcon,
  },
];

const OtherSection = ({ className, ...props }: HTMLProps<HTMLElement>): JSX.Element => {
  return (
    <section
      className={`flex flex-col py-12 px-8 tablet:px-16 desktop:pb-24 ${className}`}
      {...props}
    >
      <h1 className="text-3xl font-bold uppercase font-futura tracking-wider">Other</h1>
      <div className="flex flex-col space-y-2 mt-8 desktop:flex-row desktop:space-y-0 desktop:space-x-4">
        {LINKS.map(({ title, href, Icon }, index) => (
          <Link href={href} key={index} scroll={false}>
            <a className="flex bg-shark-400 rounded-md py-3 px-3 uppercase tracking-wider text-gray-400 items-center desktop:flex-1 desktop:py-8 desktop:justify-center desktop:flex-col desktop:font-semibold desktop:h-[15vw] desktop:max-h-52 desktop:rounded-lg desktop:hover:scale-[1.02] duration-300 group hover:text-primary-500 ease-linear">
              <Icon className="text-gray-500 mr-3 desktop:mr-0 desktop:mb-4 desktop:h-10 desktop:w-10 desktop:text-gray-400 group-hover:text-primary-500 duration-300 ease-linear" />
              {title}
            </a>
          </Link>
        ))}
        <div className="hidden desktop:flex flex-1"></div>
      </div>
    </section>
  );
};

export default OtherSection;
