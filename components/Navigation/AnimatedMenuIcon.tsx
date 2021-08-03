import { motion } from "framer-motion";
import React, { SVGProps } from "react";

const AnimatedMenuIcon: React.FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      fill="currentColor"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={{ close: { d: "M4 6l16 0" }, open: { d: "M6 6l12 12" } }}
        // transition={{ duration: 0.3 }}
      />
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={{ close: { opacity: 1 }, open: { opacity: 0 } }}
        transition={{ duration: 0.1 }}
        d="M4 12h16"
      />
      <motion.path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        variants={{ close: { d: "M4 18l16 0" }, open: { d: "M6 18l12 -12" } }}
        // transition={{ duration: 0.3 }}
      />
    </svg>
  );
};

export default AnimatedMenuIcon;
