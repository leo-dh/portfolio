import React, { HTMLProps } from "react";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  return (
    <section className={`min-h-screen flex flex-col py-12 ${className}`} {...props}>
      <h1 className="text-5xl font-black text-gray-400 uppercase">Projects</h1>
      <div className="mt-16 px-8 flex flex-col space-y-36">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};

export default ProjectsSection;
