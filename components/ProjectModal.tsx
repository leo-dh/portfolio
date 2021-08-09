import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CrossIcon } from "./Icons";
import { PROJECTS_DETAILS } from "../utils/PublicData";

interface ProjectModalProps {
  callback: () => void;
  index: number | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ callback, index }) => {
  const { tags, title } = PROJECTS_DETAILS[index ?? 0];
  return (
    <>
      <motion.div
        className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/60 cursor-pointer"
        onClick={callback}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      ></motion.div>
      <div className="fixed w-[90vw] h-[80vh] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[60]">
        <motion.div
          className="flex flex-col overflow-y-scroll h-full rounded-lg"
          layoutId={`card-${index}`}
        >
          <motion.div
            className="p-2 bg-white absolute top-0 right-0 rounded-tr-lg rounded-bl-lg z-[61] cursor-pointer"
            onClick={callback}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CrossIcon className="w-4 h-4 text-gray-800" />
          </motion.div>
          <motion.div
            className="h-56 tablet:h-64 relative flex-shrink-0"
            layoutId={`image-${index}`}
          >
            <Image src="/thumbnails/citypop.jpeg" layout="fill" objectFit="cover" />
            <motion.div
              className="absolute -bottom-16 left-4 flex flex-col text-white"
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
          <motion.div className="pb-8 bg-shark-500 px-4 text-white flex flex-col">
            <div className="border-l-4 border-jungle-green-500 font-bold pl-4 text-lg mt-28">
              What is it?
            </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem alias facilis culpa
              commodi nam placeat error quidem ipsa officia recusandae!
            </p>
            <div className="mt-16 border-l-4 border-jungle-green-500 font-bold pl-4 text-lg">
              Links
            </div>
            <p className="mt-4 text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem alias facilis culpa
              commodi nam placeat error quidem ipsa officia recusandae!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectModal;
