import { useEffect, useState } from "react";
import { m, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import ROUTES from "@utils/routes";
import { ContactIcon, PaperAirplaneIcon } from "../Icons";
import AnimatedMenuIcon from "./AnimatedMenuIcon";

const navVariants: Variants = {
  open: {
    width: "100%",
    height: "auto",
    right: "0px",
    bottom: "-16px",
    borderRadius: "5%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
  close: {
    width: "52px",
    height: "52px",
    right: "16px",
    bottom: "16px",
    borderRadius: "50%",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      delay: 0.4,
    },
  },
};

const listItemVariants: Variants = {
  open: (active: boolean) => ({
    y: 0,
    opacity: active ? 1 : 0.6,
    transition: {
      stiffness: 1000,
    },
  }),
  close: {
    y: 40,
    opacity: 0,
    transition: {
      stiffness: 1000,
    },
  },
};

const listVariants: Variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  close: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileNavigation = ({ pathname }: { pathname: string }): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <m.button
        className={`fixed bottom-4 right-4 rounded-full p-4 z-30 bg-primary-500`}
        onClick={toggleMenu}
        animate={isMenuOpen ? "open" : "close"}
        aria-label="Navigation Menu"
      >
        <AnimatedMenuIcon className="text-gray-700 h-5 w-5" />
      </m.button>
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            className="fixed w-full h-full bg-black/60 z-10 cursor-pointer"
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            onClick={toggleMenu}
          ></m.div>
        )}
      </AnimatePresence>
      <m.nav
        className={`fixed overflow-hidden flex bottom-0 right-0 z-20 bg-primary-500 ${
          isMenuOpen ? "shadow-lg" : "shadow-md"
        }`}
        animate={isMenuOpen ? "open" : "close"}
        initial={false}
        variants={navVariants}
        layout
      >
        <AnimatePresence>
          {isMenuOpen && (
            <m.ul
              className="flex flex-col justify-center items-center w-screen py-4 h-96 space-y-2 tracking-wider"
              variants={listVariants}
              initial="close"
              animate="open"
              exit="close"
            >
              {ROUTES.map(({ href, title }) => {
                return href === "/contact" ? (
                  <m.li key={href} variants={listItemVariants} custom={true}>
                    <Link href={href} scroll={false}>
                      <a className="flex uppercase font-semibold bg-primary-300 rounded-md overflow-hidden items-center mt-4">
                        <div className="bg-primary-700 p-2 text-white">
                          <ContactIcon />
                        </div>
                        <span
                          className={`mx-3 pb-1
                      ${pathname === href ? "text-shark-500" : "text-primary-800 opacity-60"}
                        `}
                        >
                          {title}
                        </span>
                      </a>
                    </Link>
                  </m.li>
                ) : (
                  <m.li
                    key={href}
                    variants={listItemVariants}
                    custom={pathname === href}
                    className={`py-2 uppercase relative ${
                      pathname === href
                        ? "text-shark-500 font-extrabold"
                        : "text-primary-800 opacity-60 font-semibold"
                    }`}
                  >
                    <Link href={href} scroll={false}>
                      {title}
                    </Link>

                    {pathname === href && (
                      <m.div
                        className="absolute text-shark-500 top-1 bottom-0 -left-6 flex items-center"
                        layoutId="indicator"
                        initial={false}
                      >
                        <PaperAirplaneIcon className="rotate-90 h-4 w-4" />
                      </m.div>
                    )}
                  </m.li>
                );
              })}
            </m.ul>
          )}
        </AnimatePresence>
      </m.nav>
    </>
  );
};

export default MobileNavigation;
