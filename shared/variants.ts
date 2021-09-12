import { Variants } from "framer-motion";

export const fadeInBottom: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};
