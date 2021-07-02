import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CrossIcon } from "./Icons";

interface ProjectModalProps {
  callback: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ callback }) => {
  const tags = ["TypeScript", "Vue", "SCSS"];
  return (
    <>
      <motion.div
        className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/75 cursor-pointer"
        onClick={callback}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, delay: 0.15 }}
      ></motion.div>
      <div className="fixed w-[90vw] h-[80vh] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[60]">
        <motion.div className="flex flex-col overflow-y-scroll h-full rounded-lg" layoutId="card">
          <motion.div
            className="p-2 bg-white absolute top-0 right-0 rounded-tr-lg rounded-bl-lg z-[61] cursor-pointer"
            onClick={callback}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CrossIcon className="w-4 h-4" />
          </motion.div>
          <motion.div className="h-56 relative flex-shrink-0" layoutId="image">
            <Image src="/thumbnails/citypop.jpeg" layout="fill" objectFit="cover" />
            <motion.div
              className="absolute -bottom-16 left-4 flex flex-col text-white"
              layoutId="content"
            >
              <motion.p className="font-light">CityPop Landing Page</motion.p>
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
          <motion.div className="pt-20 bg-gray-700 px-4 text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem alias facilis culpa
            commodi nam placeat error quidem ipsa officia recusandae! Consequuntur aliquam eos
            explicabo nesciunt exercitationem, nulla voluptatum modi dignissimos nisi expedita
            molestias officia impedit culpa. Aliquam reiciendis optio, officia culpa soluta ducimus
            laboriosam fuga enim ipsum, quidem animi ut.
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectModal;
