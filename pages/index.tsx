import React from "react";
import { OtherSection, Layout, MainSection, ProjectsSection } from "../components";

const Home = (): JSX.Element => {
  return (
    <Layout>
      <MainSection />
      <ProjectsSection />
      <OtherSection />
    </Layout>
  );
};

export default Home;
