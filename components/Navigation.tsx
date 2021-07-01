import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon } from "./Icons";

const Navigation: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (): void => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav>
      <div
        className="fixed px-4 py-2 left-[50%] bottom-0 transform -translate-x-1/2 bg-blue-200 flex items-center justify-center rounded-t-md shadow-md z-20 cursor-pointer"
        onClick={toggleMenu}
      >
        <MenuIcon className="text-gray-700 h-5 w-5" />
        <p className="ml-2 uppercase text-sm text-gray-700">Menu</p>
      </div>
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
      )
    </nav>
  );
};

export default Navigation;
