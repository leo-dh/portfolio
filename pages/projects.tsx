import { useEffect, useState } from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ProjectCard, ProjectModal } from "@components";
import { getAllProjects, ProjectMDXData } from "@lib/mdx";
import { GetStaticProps } from "next";

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
  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? "hidden" : "";
  }, [selectedId]);

  return (
    <>
      <Head>
        <title>Leo Ding Hao - Projects</title>
      </Head>
      <section className="flex flex-col justify-center desktop:justify-start min-h-screen px-8 py-12 tablet:px-16 tablet:py-16">
        <h1 className="text-4xl font-extrabold uppercase tracking-wider font-futura text-jungle-green-500">
          Projects
        </h1>

        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {selectedId !== null && (
              <ProjectModal
                index={selectedId}
                callback={() => setSelectedId(null)}
                project={projects[selectedId ?? 0]}
              />
            )}
          </AnimatePresence>
          <ul className="mt-8 gap-4 tablet:mt-12 grid grid-cols">
            {projects.map(({ data }, index) => (
              <ProjectCard
                index={index}
                key={index}
                {...data}
                autoSize
                onClick={() => setSelectedId(index)}
              />
            ))}
          </ul>
        </AnimateSharedLayout>
      </section>
    </>
  );
};

export default Projects;
