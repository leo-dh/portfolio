import { HTMLMotionProps, motion, Variants } from "framer-motion";
import { HandWavingIcon } from "./Icons";
import { Links } from "@lib/mdx";

const variants: Variants = {
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

interface HeroSectionProps extends HTMLMotionProps<"section"> {
  links: Links;
}

const HeroSection = ({ links, className, ...props }: HeroSectionProps): JSX.Element => {
  return (
    <motion.section
      {...props}
      className={`min-h-screen flex justify-center flex-col px-4 tablet:px-16 py-12 ${className}`}
      transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
      initial="initial"
      animate="animate"
    >
      <motion.div className="flex items-center" variants={variants}>
        <h1 className="font-bold text-5xl tablet:text-6xl desktop:text-7xl text-jungle-green-500">
          Hey there
        </h1>
        <HandWavingIcon
          viewBox="0 0 40 40"
          className="ml-4 w-10 h-10 tablet:ml-6 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
        />
      </motion.div>

      <motion.p
        variants={variants}
        className="mt-4 text-lg font-semibold tablet:text-xl desktop:text-2xl desktop:mt-6"
      >
        My name is Leo Ding Hao.{" "}
      </motion.p>

      <motion.p
        variants={variants}
        className="mt-6 font-light tablet:text-lg desktop:text-xl desktop:mt-8"
      >
        I am an aspiring software engineer who is interested in front-end development.
        <br className="hidden tablet:inline" /> All of my projects are listed on{" "}
        <a className="textlink" href={links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        if you are interested.
      </motion.p>
    </motion.section>
  );
};

export default HeroSection;
