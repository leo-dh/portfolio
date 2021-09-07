import { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion, Variants } from "framer-motion";
import { ProjectCard, ProjectModal, MetaTags } from "@components";
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

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
    },
  },
};
const Projects = ({ projects }: ProjectsProps): JSX.Element => {
  const [selectedId, setSelectedId] = useState<null | number>(null);
  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? "hidden" : "";
  }, [selectedId]);

  return (
    <>
      <MetaTags
        title="My Projects - Leo Ding Hao"
        description="You can view a list of my past projects here! Links are also provided."
      />
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
          <motion.ul
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
                variants={variants}
                onClick={() => setSelectedId(index)}
              />
            ))}
          </motion.ul>
        </AnimateSharedLayout>
      </section>
    </>
  );
};

export default Projects;
