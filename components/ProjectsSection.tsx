import React, { useState, HTMLProps } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { ChevronRightIcon } from "./Icons";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import ProjectModal from "./ProjectModal";

const ProjectsSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  return (
    <section className={`min-h-screen flex flex-col py-12 ${className}`} {...props}>
      <div className="flex items-end">
        <h1 className="text-4xl font-black text-gray-700 uppercase">Projects </h1>
        <Link href="/projects">
          <a className="font-light tracking-wider ml-4">
            more <ChevronRightIcon className="h-3 w-3 inline" />
          </a>
        </Link>
      </div>
      {/* TODO replace cards with carousel */}
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          {selectedId !== null && <ProjectModal callback={() => setSelectedId(null)} />}
        </AnimatePresence>
        <ul className="mt-12 px-8 flex overflow-x-scroll hide-scroll-bar space-x-4">
          {/* {Array(5)
            .fill(0)
            .map((_, index) => (
              <ProjectCard key={index} onClick={() => setSelectedId(1)} />
            ))} */}

          <ProjectCard onClick={() => setSelectedId(1)} />
        </ul>
      </AnimateSharedLayout>
    </section>
  );
};

export default ProjectsSection;
