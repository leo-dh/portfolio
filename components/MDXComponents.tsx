/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/heading-has-content */
import { HTMLProps, SVGProps } from "react";
import LinkButton from "./LinkButton";
import { ExternalLinkIcon, GitHubIcon } from "./Icons";

export const MDXTitle = (props: HTMLProps<HTMLHeadingElement>): JSX.Element => (
  <h2
    className="border-l-4 border-primary-500 font-bold pl-4 text-lg tablet:text-xl"
    {...props}
  ></h2>
);
export const MDXContentContainer = (props: HTMLProps<HTMLDivElement>): JSX.Element => (
  <div className="mt-4 desktop:mt-6" {...props}></div>
);
export const MDXContentText = (props: HTMLProps<HTMLParagraphElement>): JSX.Element => (
  <p className="text-sm tablet:text-base" {...props}></p>
);

export const MDXContentTextLink = (props: HTMLProps<HTMLAnchorElement>): JSX.Element => (
  <a {...props} className="font-semibold underline hover:text-primary-500 duration-300"></a>
);

export const MDXLinksContainer = (props: HTMLProps<HTMLDivElement>): JSX.Element => (
  <div className="flex justify-start gap-2 tablet:gap-4" {...props}></div>
);
export const MDXSpacer = (): JSX.Element => <div className="mt-16"></div>;

export const MDXIcon = (
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
): (() => JSX.Element) => {
  const el = (): JSX.Element => <Icon className="w-6 h-6 tablet:w-8 tablet:h-8" />;
  el.displayName = `${Icon.name}-MDX`;
  return el;
};

export const components = {
  Title: MDXTitle,
  Content: MDXContentContainer,
  Text: MDXContentText,
  TextLink: MDXContentTextLink,
  Links: MDXLinksContainer,
  Spacer: MDXSpacer,
  LinkButton,
  GitHubIcon: MDXIcon(GitHubIcon),
  ExternalLinkIcon: MDXIcon(ExternalLinkIcon),
};
