import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import ROUTES from "@utils/routes";
import { ContactIcon } from "../Icons";
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
  open: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 1000,
    },
  },
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

const MobileNavigation = (): JSX.Element => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.button
        className={`fixed bottom-4 right-4 rounded-full p-4 z-30 bg-jungle-green-500`}
        onClick={toggleMenu}
        animate={isMenuOpen ? "open" : "close"}
      >
        <AnimatedMenuIcon className="text-gray-700 h-5 w-5" />
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed w-full h-full bg-black/60 z-10 cursor-pointer"
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { delay: 0.2 } }}
            onClick={toggleMenu}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        className={`fixed overflow-hidden flex bottom-0 right-0 z-20 bg-jungle-green-500 ${
          isMenuOpen ? "shadow-lg" : "shadow-md"
        }`}
        animate={isMenuOpen ? "open" : "close"}
        initial={false}
        variants={navVariants}
        layout
      >
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="flex flex-col justify-center items-center w-screen py-4 h-96 space-y-2 tracking-wider"
              variants={listVariants}
              initial="close"
              animate="open"
              exit="close"
            >
              {ROUTES.map(({ href, title }) => {
                return href === "/contact" ? (
                  <motion.li key={href} variants={listItemVariants}>
                    <Link href={href}>
                      <a className="flex uppercase font-bold bg-jungle-green-200 rounded-md overflow-hidden items-center mt-4">
                        <div className="bg-jungle-green-700 p-2 text-white">
                          <ContactIcon />
                        </div>
                        <span className="mx-3 text-shark-700">{title}</span>
                      </a>
                    </Link>
                  </motion.li>
                ) : (
                  <motion.li
                    key={href}
                    variants={listItemVariants}
                    className="py-2 uppercase font-bold text-shark-700"
                  >
                    <Link href={href}>{title}</Link>
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default MobileNavigation;
