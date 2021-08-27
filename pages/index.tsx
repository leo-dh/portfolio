import Head from "next/head";
import { OtherSection, MainSection, ProjectsSection } from "@components";

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Leo Ding Hao - Main</title>
      </Head>
      <MainSection />
      <ProjectsSection />
      <OtherSection />
    </>
  );
};

export default Home;
