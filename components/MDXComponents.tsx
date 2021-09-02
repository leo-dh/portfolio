import { HTMLProps, SVGProps } from "react";
import LinkButton from "./LinkButton";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

const MDXTitle = (props: HTMLProps<HTMLHeadingElement>): JSX.Element => (
  <h2
    className="border-l-4 border-jungle-green-500 font-bold pl-4 text-lg tablet:text-xl"
    {...props}
  ></h2>
);
const MDXContentContainer = (props: HTMLProps<HTMLDivElement>): JSX.Element => (
  <div className="mt-4 desktop:mt-6" {...props}></div>
);
const MDXContentText = (props: HTMLProps<HTMLParagraphElement>): JSX.Element => (
  <p className="text-sm tablet:text-base" {...props}></p>
);
const MDXLinksContainer = (props: HTMLProps<HTMLDivElement>): JSX.Element => (
  <div className="flex justify-start gap-2 tablet:gap-4" {...props}></div>
);
const MDXSpacer = (): JSX.Element => <div className="mt-16"></div>;
const MDXIcon = (Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element): (() => JSX.Element) => {
  const el = (): JSX.Element => <Icon className="w-6 h-6 tablet:w-8 tablet:h-8" />;
  el.displayName = `${Icon.name}-MDX`;
  return el;
};

export const components = {
  Title: MDXTitle,
  Content: MDXContentContainer,
  Text: MDXContentText,
  Links: MDXLinksContainer,
  Spacer: MDXSpacer,
  LinkButton,
  GitHubIcon: MDXIcon(GitHubIcon),
  ExternalLinkIcon: MDXIcon(ExternalLinkIcon),
};
