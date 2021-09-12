import { useState } from "react";
import { AnimateSharedLayout, m } from "framer-motion";
import { ProjectCard, MetaTags } from "@components";
import { getAllProjects, ProjectMDXData } from "@lib/mdx";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import { fadeInBottom } from "@shared/variants";

const ProjectModal = dynamic(() => import("@components/ProjectModal"), { ssr: false });

interface ProjectsProps {
  projects: ProjectMDXData[];
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
};

const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  const [selectedId, setSelectedId] = useState<null | number>(null);

  return (
    <>
      <MetaTags
        title="My Projects - Leo Ding Hao"
        description="You can view a list of my past projects here! Links are also provided."
      />
      <section className="flex flex-col justify-center desktop:justify-start min-h-screen px-8 py-12 tablet:px-16 tablet:py-16">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider font-futura text-primary-500">
          Projects
        </h1>

        <AnimateSharedLayout type="crossfade">
          <ProjectModal
            index={selectedId}
            callback={() => setSelectedId(null)}
            project={projects[selectedId ?? 0]}
          />
          <m.ul
            className="mt-8 gap-4 tablet:mt-12 grid grid-cols"
            transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
            initial="initial"
            animate="animate"
          >
            {projects.map(({ data }, index) => (
              <ProjectCard
                index={index}
                key={index}
                {...data}
                autoSize
                variants={fadeInBottom}
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
          </m.ul>
        </AnimateSharedLayout>
      </section>
    </>
  );
};

export default Projects;
