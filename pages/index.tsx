import React from "react";
import { OtherSection, Layout, MainSection, ProjectsSection } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <MainSection />
      <ProjectsSection />
      <OtherSection />
    </Layout>
  );
};

export default Home;
