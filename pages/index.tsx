import React from "react";
import { ContactSection, Layout, MainSection, ProjectsSection } from "../components";

const Home: React.FC = () => {
  return (
    <Layout>
      <MainSection />
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default Home;
