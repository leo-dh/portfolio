import { HTMLProps, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CrossIcon, GitHubIcon } from "./Icons";
import LinkButton from "./LinkButton";
import { GITHUB_PROFILE, PROJECTS_DETAILS } from "@utils/PublicData";
import { useCustomScrollbar } from "./CustomScrollbar";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { ProjectMDXData } from "@lib/mdx";

const LINKS = [
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
    Icon: GitHubIcon,
  },
];

const MDXTitle = (props: HTMLProps<HTMLHeadingElement>): JSX.Element => (
  <h2
    className="mt-16 border-l-4 border-jungle-green-500 font-bold pl-4 text-lg desktop:text-xl"
    {...props}
  ></h2>
);
const MDXContent = (props: HTMLProps<HTMLDivElement>): JSX.Element => (
  <p className="mt-4 text-sm desktop:text-base desktop:mt-6" {...props}></p>
);
const components = {
  Title: MDXTitle,
  Content: MDXContent,
  LinkButton,
  GitHubIcon,
};

interface ProjectModalProps {
  callback: () => void;
  index: number | null;
  project: ProjectMDXData;
}

const ProjectModal = ({ callback, index, project }: ProjectModalProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [showScrollbar, Scrollbar] = useCustomScrollbar(containerRef);

  const {
    data: { image, tags, title },
    content,
  } = project;
  return (
    <>
      <motion.div
        className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-black/60 cursor-pointer"
        onClick={callback}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
      ></motion.div>
      <div className="fixed w-[90vw] max-h-[80vh] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[60] tablet:w-[560px] tablet:h-auto desktop:w-[960px] desktop:rounded-lg">
        <motion.div
          className="flex flex-col overflow-y-scroll h-full rounded-lg desktop:rounded-xl max-h-[80vh] hide-scrollbar"
          layoutId={`card-${index}`}
          ref={containerRef}
        >
          <motion.div
            className="p-2 bg-white absolute top-0 right-0 rounded-tr-lg rounded-bl-lg z-[61] cursor-pointer"
            onClick={callback}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CrossIcon className="w-4 h-4 text-gray-800 desktop:w-6 desktop:h-6" />
          </motion.div>
          {showScrollbar && <Scrollbar />}
          <motion.div
            className="h-56 tablet:h-64 desktop:h-96 relative flex-shrink-0"
            layoutId={`image-${index}`}
          >
            <Image src="/thumbnails/citypop.jpeg" layout="fill" objectFit="cover" />
            <motion.div
              className="absolute -bottom-18 left-4 flex flex-col text-white tablet:left-6 desktop:-bottom-24 desktop:left-8"
              layoutId={`content-${index}`}
              layout
            >
              <motion.p className="font-light desktop:text-2xl">{title}</motion.p>
              <motion.div className="gap-x-2 flex flex-wrap items-center mt-2 mr-4">
                {tags.map((tag, index) => {
                  return (
                    <div className="rounded-full bg-gray-300 inline-flex py-0.5 px-2" key={index}>
                      <p className="font-bold text-xs text-gray-700 desktop:text-sm">{tag}</p>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div className="pb-8 bg-shark-500 px-4 text-white flex flex-col tablet:px-6 desktop:px-8 desktop:pb-16 pt-12 desktop:pt-20">
            <MDXRemote {...content} components={components} />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectModal;
