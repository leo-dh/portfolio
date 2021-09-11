import { AnimationControls, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { IntersectionOptions, useInView } from "react-intersection-observer";

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

interface FadeInProviderProps {
  children: ({
    animate: controls,
    ref,
    variants,
    initial,
  }: {
    animate: AnimationControls;
    ref: (node?: Element | null | undefined) => void;
    variants: Variants;
    initial: string;
  }) => JSX.Element;
  options?: IntersectionOptions;
}

const FadeInProvider = ({
  children,
  options = {
    triggerOnce: true,
    threshold: 0.3,
  },
}: FadeInProviderProps): JSX.Element => {
  const controls = useAnimation();
  const { ref, inView } = useInView(options);
  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);
  return children({ animate: controls, ref, variants, initial: "initial" });
};

export default FadeInProvider;
