import React, { HTMLProps } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard: React.FC<HTMLProps<HTMLLIElement>> = (props) => {
  const tags = ["TypeScript", "Vue", "SCSS"];
  return (
    <li className="flex-shrink-0 cursor-pointer" {...props}>
      <motion.div
        className="flex flex-col w-64 h-64 rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden"
        layoutId="card"
      >
        <motion.div className="h-full relative" layoutId="image">
          <Image src="/thumbnails/citypop.jpeg" layout="fill" objectFit="cover" />
          <motion.div
            className="absolute bottom-4 left-4 flex flex-col text-white"
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
        {/* <motion.div
          className="bg-gray-700 h-24 text-white px-4 pb-4 pt-3 flex flex-col"
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
        </motion.div> */}
      </motion.div>
    </li>
  );
};

export default ProjectCard;
