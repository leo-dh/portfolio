import Head from "next/head";
import { OtherSection, MainSection, ProjectsSection } from "@components";
import { GetStaticProps } from "next";
import { getAllProjects, ProjectMDXData } from "@lib/mdx";

interface HomeProps {
  projects: ProjectMDXData[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      projects: await getAllProjects(),
    },
  };
};

const Home = ({ projects }: HomeProps): JSX.Element => {
  console.log(projects);
  return (
    <>
      <Head>
        <title>Leo Ding Hao - Main</title>
      </Head>
      <MainSection />
      <ProjectsSection projects={projects} />
      <OtherSection />
    </>
  );
};

export default Home;
