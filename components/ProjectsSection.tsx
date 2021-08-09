import React, { useState, HTMLProps, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { ProjectCard, ProjectModal, ChevronRightIcon } from ".";
import { PROJECTS_DETAILS } from "../utils/PublicData";

const ProjectsSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? "hidden" : "";
  }, [selectedId]);
  return (
    <section className={`flex flex-col py-12 ${className}`} {...props}>
      <div className="flex items-end ml-8 tablet:ml-16">
        <h1 className="text-4xl font-black uppercase">Projects </h1>
        <Link href="/projects">
          <a className="font-light tracking-wider ml-4">
            more <ChevronRightIcon className="h-3 w-3 inline" />
          </a>
        </Link>
      </div>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          {selectedId !== null && (
            <ProjectModal index={selectedId} callback={() => setSelectedId(null)} />
          )}
        </AnimatePresence>
        <ul className="py-8 px-8 flex overflow-x-scroll hide-scroll-bar space-x-4 tablet:px-16">
          {PROJECTS_DETAILS.map((project, index) => (
            <ProjectCard
              index={index}
              key={index}
              {...project}
              onClick={() => setSelectedId(index)}
            />
          ))}
          <motion.li
            className="flex-shrink-0"
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <Link href="/projects">
              <a className="flex flex-col w-64 h-64 rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden border-2 border-gray-600 items-center justify-center tablet:h-72 tablet:w-72">
                <ChevronRightIcon />
                <span className="tracking-wider">more</span>
              </a>
            </Link>
          </motion.li>
        </ul>
      </AnimateSharedLayout>
    </section>
  );
};

export default ProjectsSection;
