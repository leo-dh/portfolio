import { useState, HTMLProps, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, AnimateSharedLayout, motion, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { ChevronRightIcon } from "./Icons";
import { ProjectMDXData } from "@lib/mdx";

const svgVariants: Variants = {
  rest: {
    x: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
  hover: {
    x: 5,
    transition: {
      duration: 0.4,
      type: "tween",
      ease: "easeOut",
    },
  },
};

interface ProjectsSectionProps extends HTMLProps<HTMLElement> {
  projects: ProjectMDXData[];
}

const ProjectsSection = ({ projects, className, ...props }: ProjectsSectionProps): JSX.Element => {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? "hidden" : "";
  }, [selectedId]);
  return (
    <section className={`flex flex-col py-12 ${className}`} {...props}>
      <div className="flex items-end ml-8 tablet:ml-16">
        <h1 className="text-3xl font-bold uppercase font-futura tracking-wider">Projects </h1>
        <Link href="/projects" passHref>
          <motion.a
            className="font-normal tracking-wider ml-4 hover:text-jungle-green-500 duration-300 ease-in-out text-gray-500 desktop:text-lg !leading-none"
            whileHover="hover"
          >
            more
            <motion.div variants={svgVariants} className="inline-block desktop:ml-1">
              <ChevronRightIcon className="h-3 w-3 inline desktop:stroke-4" />
            </motion.div>
          </motion.a>
        </Link>
      </div>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence exitBeforeEnter>
          {selectedId !== null && (
            <ProjectModal
              index={selectedId}
              callback={() => setSelectedId(null)}
              project={projects[selectedId ?? 0]}
            />
          )}
        </AnimatePresence>
        <ul className="py-8 px-8 flex overflow-x-scroll hide-scrollbar space-x-4 tablet:px-16">
          {projects.slice(0, 3).map(({ data }, index) => (
            <ProjectCard
              index={index}
              key={data.title}
              {...data}
              corner
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
