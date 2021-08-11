import React, { useState, HTMLProps, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ProjectCard, ProjectModal, ChevronRightIcon } from ".";
import { PROJECTS_DETAILS } from "../utils/PublicData";

const ProjectsSection = ({ className, ...props }: HTMLProps<HTMLElement>): JSX.Element => {
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
          <ProjectCard.Empty className="desktop:hidden" />
        </ul>
      </AnimateSharedLayout>
    </section>
  );
};

export default ProjectsSection;
