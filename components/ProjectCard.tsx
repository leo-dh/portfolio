import React from "react";
import Image from "next/image";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { ChevronRightIcon } from "./Icons";

const CardContainer = ({ children, className, ...props }: HTMLMotionProps<"li">): JSX.Element => {
  return (
    <motion.li
      className={`flex-shrink-0 cursor-pointer ${className}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </motion.li>
  );
};

interface ProjectCardProps extends HTMLMotionProps<"li"> {
  title: string;
  tags: string[];
  index: number;
}

const ProjectCard = ({ title, tags, index, ...props }: ProjectCardProps): JSX.Element => {
  return (
    <CardContainer {...props}>
      <motion.div
        className="flex flex-col w-64 h-64 rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden border-2 border-gray-600 tablet:w-72 tablet:h-72"
        layoutId={`card-${index}`}
      >
        <motion.div className="h-full relative" layoutId={`image-${index}`}>
          <Image src="/thumbnails/citypop.jpeg" layout="fill" objectFit="cover" />
          <motion.div
            className="absolute bottom-4 left-4 flex flex-col text-white"
            layoutId={`content-${index}`}
          >
            <motion.p className="font-light">{title}</motion.p>
            <motion.div className="gap-x-2 flex flex-wrap items-center mt-2">
              {tags.map((tag, index) => {
                return (
                  <div className="rounded-full bg-gray-300 inline-flex py-0.5 px-2" key={index}>
                    <p className="font-bold text-xs text-gray-700">{tag}</p>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </CardContainer>
  );
};

const EmptyCard = ({ ...props }: HTMLMotionProps<"li">): JSX.Element => {
  return (
    <CardContainer {...props}>
      <Link href="/projects">
        <a className="flex flex-col w-64 h-64 rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden border-2 border-gray-600 items-center justify-center tablet:h-72 tablet:w-72">
          <ChevronRightIcon />
          <span className="tracking-wider">more</span>
        </a>
      </Link>
    </CardContainer>
  );
};

ProjectCard.Empty = EmptyCard;

export { ProjectCard };
