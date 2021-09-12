import { OtherSection, HeroSection, ProjectsSection, MetaTags } from "@components";
import { GetStaticProps } from "next";
import { getAllProjects, getLinks, Links, ProjectMDXData } from "@lib/mdx";

interface HomeProps {
  projects: ProjectMDXData[];
  links: Links;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      projects: await getAllProjects(),
      links: await getLinks(),
    },
    revalidate: 300,
  };
};

const Home = ({ projects, links }: HomeProps): JSX.Element => {
  return (
    <>
      <MetaTags />
      <HeroSection links={links} />
      <ProjectsSection projects={projects} />
      <OtherSection />
    </>
  );
};

export default Home;
