import { HTMLProps, SVGProps } from "react";
import LinkButton from "./LinkButton";
import { GitHubIcon } from "./Icons";

const MDXTitle = (props: HTMLProps<HTMLHeadingElement>): JSX.Element => (
  <h2
    className="border-l-4 border-jungle-green-500 font-bold pl-4 text-lg tablet:text-xl"
    {...props}
  ></h2>
);
const MDXContent = (props: HTMLProps<HTMLDivElement>): JSX.Element => (
  <p className="mt-4 text-sm tablet:text-base desktop:mt-6" {...props}></p>
);
const MDXSpacer = (): JSX.Element => <div className="mt-16"></div>;
const MDXIcon = (Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element): (() => JSX.Element) => {
  const el = (): JSX.Element => <Icon className="w-6 h-6 tablet:w-8 tablet:h-8" />;
  el.displayName = `${Icon.name}-MDX`;
  return el;
};

export const components = {
  Title: MDXTitle,
  Content: MDXContent,
  Spacer: MDXSpacer,
  LinkButton,
  GitHubIcon: MDXIcon(GitHubIcon),
};
