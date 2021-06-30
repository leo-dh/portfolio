import React, { HTMLProps } from "react";
import Image from "next/image";

const ProjectCard: React.FC<HTMLProps<HTMLDivElement>> = (props) => {
  const tags = ["TypeScript", "Vue", "SCSS"];
  return (
    <div {...props}>
      <div className="flex justify-between mb-2">
        <p className="font-bold text-gray-700 uppercase text-xl">City Pop</p>
        <div className="flex gap-x-1">
          <div className="rounded-full p-4 bg-gray-400"></div>
          <div className="rounded-full p-4 bg-gray-400"></div>
        </div>
      </div>
      <Image
        src="/thumbnails/citypop.jpeg"
        width="1920"
        height="1080"
        layout="intrinsic"
        className="rounded"
      />
      <div className="gap-x-2 flex flex-wrap gap-y-2 items-center mt-2">
        {tags.map((tag) => {
          return (
            <div className="rounded-full bg-red-200 inline-flex py-1 px-4" key="i">
              <p className="font-bold text-sm">{tag}</p>
            </div>
          );
        })}
      </div>
      <p className="mt-6 text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab cupiditate quo et unde
        voluptatibus hic sint tenetur. A voluptates ab adipisci, laborum incidunt porro, nisi dolore
        nihil voluptas eius quibusdam.
      </p>
    </div>
  );
};

export default ProjectCard;
