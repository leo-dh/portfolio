import { useState, HTMLProps } from "react";
import Link from "next/link";
import { AnimateSharedLayout, m, Variants } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { ChevronRightIcon } from "./Icons";
import { ProjectMDXData } from "@lib/mdx";
import dynamic from "next/dynamic";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

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

  return (
    <section className={`flex flex-col py-12 ${className}`} {...props}>
      <div className="flex items-end ml-8 tablet:ml-16">
        <h1 className="text-3xl font-bold uppercase font-futura tracking-wider">Projects </h1>
        <Link href="/projects" passHref>
          <m.a
            className="font-normal tracking-wider ml-4 hover:text-primary-500 duration-300 ease-in-out text-gray-400 desktop:text-lg !leading-none"
            whileHover="hover"
          >
            more
            <m.div variants={svgVariants} className="inline-block desktop:ml-1">
              <ChevronRightIcon className="h-3 w-3 inline desktop:stroke-4" />
            </m.div>
          </m.a>
        </Link>
      </div>
      <AnimateSharedLayout type="crossfade">
        <ProjectModal
          index={selectedId}
          callback={() => setSelectedId(null)}
          project={projects[selectedId ?? 0]}
        />
        <ul className="py-8 px-8 flex overflow-x-scroll hide-scrollbar space-x-4 tablet:px-16">
          {projects.slice(0, 3).map(({ data }, index) => (
            <ProjectCard
              index={index}
              key={data.title}
              {...data}
              corner
              onClick={() => setSelectedId(index)}
              onKeyPress={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedId(index);
                }
              }}
              tabIndex={selectedId !== null ? -1 : 0}
              showBorder={selectedId !== index}
            />
          ))}
          <ProjectCard.Empty className="desktop:hidden" />
        </ul>
      </AnimateSharedLayout>
    </section>
  );
};

export default ProjectsSection;
