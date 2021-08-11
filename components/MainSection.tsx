import { HTMLProps } from "react";
import { HandWavingIcon } from "./Icons";
import { GITHUB_PROFILE } from "@utils/PublicData";

const MainSection = ({ className, ...props }: HTMLProps<HTMLElement>): JSX.Element => {
  return (
    <section
      className={`min-h-screen flex justify-center flex-col px-4 tablet:px-16 py-12 ${className}`}
      {...props}
    >
      <div className="flex items-center">
        <h1 className="font-bold text-5xl tablet:text-6xl desktop:text-7xl text-jungle-green-500">
          Hey there
        </h1>
        <HandWavingIcon
          viewBox="0 0 40 40"
          className="ml-4 w-10 h-10 tablet:ml-6 tablet:w-12 tablet:h-12 desktop:w-14 desktop:h-14"
        />
      </div>

      <p className="mt-4 text-lg font-semibold tablet:text-xl desktop:text-2xl desktop:mt-6">
        My name is Leo Ding Hao.{" "}
      </p>

      <p className="mt-6 font-light tablet:text-lg desktop:text-xl desktop:mt-8">
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
