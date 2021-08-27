import { useEffect, useState } from "react";
import Head from "next/head";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { ProjectCard, ProjectModal } from "@components";
import { PROJECTS_DETAILS } from "@utils/PublicData";

const Projects = (): JSX.Element => {
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
        <h1 className="text-4xl font-bold uppercase tracking-wider font-futura text-jungle-green-500">
          Projects
        </h1>

        <AnimateSharedLayout type="crossfade">
          <AnimatePresence>
            {selectedId !== null && (
              <ProjectModal index={selectedId} callback={() => setSelectedId(null)} />
            )}
          </AnimatePresence>
          <ul className="mt-8 gap-4 tablet:mt-12 grid grid-cols">
            {PROJECTS_DETAILS.map((project, index) => (
              <ProjectCard
                index={index}
                key={index}
                {...project}
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
