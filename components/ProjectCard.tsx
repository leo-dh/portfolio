import React, { HTMLProps } from "react";

const ProjectCard: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      <div className="aspect-w-16 aspect-h-9">
        <div className="bg-gray-600"></div>
      </div>
      <p className="mt-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate quo et unde
        voluptatibus hic sint tenetur. A voluptates ab adipisci, laborum incidunt porro, nisi dolore
        nihil voluptas eius quibusdam.
      </p>
    </div>
  );
};

export default ProjectCard;
