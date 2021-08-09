import React, { HTMLProps } from "react";
import { HandWavingIcon } from "./Icons";
import { GITHUB_PROFILE } from "../utils/PublicData";

const MainSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  return (
    <section
      className={`min-h-screen flex justify-center flex-col px-4 tablet:px-16 py-12 ${className}`}
      {...props}
    >
      <div className="flex items-center">
        <h1 className="font-bold text-5xl tablet:text-6xl">Hey there</h1>
        <HandWavingIcon
          viewBox="0 0 40 40"
          className="ml-4 w-10 h-10 tablet:ml-6 tablet:w-12 tablet:h-12"
        />
      </div>

      <p className="mt-4 text-lg tablet:text-xl">My name is Leo Ding Hao. </p>

      <p className="mt-6 font-light tablet:text-lg">
        I am an aspiring software engineer who is interested in front-end development.
        <br className="hidden tablet:inline" /> All of my projects are listed on{" "}
        <a className="textlink" href={GITHUB_PROFILE} target="_blank" rel="noreferrer">
          GitHub
        </a>{" "}
        if you are interested.
      </p>
    </section>
  );
};

export default MainSection;
