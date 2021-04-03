import React, { HTMLProps } from "react";
import { HandWavingIcon } from "./Icons";

const MainSection: React.FC<HTMLProps<HTMLElement>> = ({ className, ...props }) => {
  return (
    <section
      className={`min-h-screen flex justify-center flex-col px-4 py-12 ${className}`}
      {...props}
    >
      <div className="flex items-center">
        <h1 className="font-bold text-5xl">Hey there</h1>
        <HandWavingIcon width="40" height="40" viewBox="0 0 40 40" className="ml-4" />
      </div>

      <p className="mt-6 font-light">
        My name is Leo Ding Hao. I am an aspiring software engineer who is interested in front-end
        development.
      </p>
    </section>
  );
};

export default MainSection;
