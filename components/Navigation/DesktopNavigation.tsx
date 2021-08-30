import ROUTES from "@utils/routes";
import Link from "next/link";
import { AnimateSharedLayout, motion } from "framer-motion";
import { ContactIcon, PaperAirplaneIcon } from "../Icons";

const DesktopNavigation = ({ pathname }: { pathname: string }): JSX.Element => {
  return (
    <nav className="fixed w-desktop-nav h-full">
      <AnimateSharedLayout>
        <ul className="flex flex-col items-end justify-center h-full px-8 space-y-4 text-2xl tracking-wider">
          {ROUTES.map(({ href, title }) => {
            return href === "/contact" ? (
              <li
                key={href}
                className={`${
                  pathname !== href ? "group hover:scale-[1.05] duration-200 ease-linear" : ""
                }`}
              >
                <Link href={href} scroll={false}>
                  <a className="flex uppercase font-semibold bg-jungle-green-300 rounded-md overflow-hidden items-center mt-4">
                    <div className="bg-jungle-green-700 p-4 text-white">
                      <ContactIcon />
                    </div>
                    <span
                      className={`mx-3 text-right duration-200 pb-1
                  ${
                    pathname === href
                      ? "text-shark-500 "
                      : "text-jungle-green-800 opacity-60 group-hover:opacity-100"
                  }
                    `}
                    >
                      {title}
                    </span>
                  </a>
                </Link>
              </li>
            ) : (
              <li
                key={href}
                className={`py-2 uppercase relative duration-300 ${
                  pathname === href
                    ? "text-shark-500 font-extrabold"
                    : "text-jungle-green-800 opacity-60 hover:opacity-100 font-semibold font-semibold-to-extrabold"
                }`}
              >
                <Link href={href} scroll={false}>
                  {title}
                </Link>

                {pathname === href && (
                  <motion.div
                    className="absolute text-shark-500 top-1 bottom-0 -left-10 flex items-center"
                    layoutId="indicator"
                    initial={false}
                  >
                    <PaperAirplaneIcon className="rotate-90" />
                  </motion.div>
                )}
              </li>
            );
          })}
        </ul>
      </AnimateSharedLayout>
    </nav>
  );
};

export default DesktopNavigation;
