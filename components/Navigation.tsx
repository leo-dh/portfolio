import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MenuIcon } from "./Icons";

const ROUTES = [
  { href: "/", title: "Main" },
  { href: "/projects", title: "Projects" },
  { href: "/about", title: "About Me" },
  { href: "/contact", title: "Contact Me" },
];

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

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className={`fixed bottom-4 right-4 rounded-full p-4 z-30 bg-blue-200 `}
        onClick={toggleMenu}
      >
        {/* TODO Animate MenuIcon */}
        <MenuIcon className="text-gray-700 h-5 w-5" />
      </button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed w-full h-full bg-black/75 z-10 cursor-pointer"
            id="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMenu}
          ></motion.div>
        )}
      </AnimatePresence>
      <motion.nav
        className={`fixed overflow-hidden flex bottom-0 right-0 z-20 bg-blue-200 ${
          isMenuOpen ? "shadow-lg" : "shadow-md"
        }`}
        animate={isMenuOpen ? "open" : "close"}
        variants={navVariants}
        layout
      >
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              className="flex flex-col justify-center items-center w-screen py-4 h-96"
              variants={listVariants}
              initial="close"
              animate="open"
              exit="close"
            >
              {/* TODO create style for Contact */}
              {ROUTES.map(({ href, title }) => (
                <motion.li
                  key={href}
                  variants={listItemVariants}
                  className="py-2 uppercase font-bold"
                >
                  <Link href={href}>{title}</Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navigation;
