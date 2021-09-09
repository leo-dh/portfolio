import Image from "next/image";
import { m, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { ChevronRightIcon } from "./Icons";

const CardContainer = ({ children, className, ...props }: HTMLMotionProps<"li">): JSX.Element => {
  return (
    <m.li
      className={`flex-shrink-0 cursor-pointer ${className}`}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      {...props}
    >
      {children}
    </m.li>
  );
};

interface ProjectCardProps extends HTMLMotionProps<"li"> {
  title: string;
  tags: string[];
  index: number;
  image: string;
  corner?: boolean;
  autoSize?: boolean;
}

const ProjectCard = ({
  title,
  tags,
  index,
  className,
  image,
  corner = false,
  autoSize = false,
  ...props
}: ProjectCardProps): JSX.Element => {
  return (
    <CardContainer className={`desktop:flex-1 ${className}`} {...props}>
      <m.div
        className={`flex flex-col ${
          corner ? "rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl" : "rounded-lg"
        } ${autoSize ? "w-auto h-auto" : "w-64 h-64 tablet:w-72 tablet:h-72"}
        overflow-hidden border-2 border-gray-600 aspect-ratio-1 desktop:h-auto desktop:w-auto`}
        layoutId={`card-${index}`}
        layout
      >
        <m.div className="h-full relative" layoutId={`image-${index}`}>
          <Image src={image} layout="fill" objectFit="cover" alt={`${title} preview`} />
          <m.div className="absolute flex flex-col text-white bg-gradient-to-t from-black/70 to-black/0 w-full py-4 px-4 bottom-0 left-0 justify-end h-full">
            <m.p className="font-bold desktop:text-lg">{title}</m.p>
            <m.div className="gap-2 flex flex-wrap items-center mt-2">
              {tags.map((tag, index) => {
                return (
                  <div className="rounded-full bg-gray-300 inline-flex py-0.5 px-2" key={index}>
                    <p className="font-bold text-xs text-shark-500 desktop:text-sm">{tag}</p>
                  </div>
                );
              })}
            </m.div>
          </m.div>
        </m.div>
      </m.div>
    </CardContainer>
  );
};

const EmptyCard = ({ ...props }: HTMLMotionProps<"li">): JSX.Element => {
  return (
    <CardContainer {...props}>
      <Link href="/projects">
        <a className="flex flex-col w-64 h-64 rounded-tl-lg rounded-br-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden border-2 border-gray-600 items-center justify-center tablet:h-72 tablet:w-72">
          <ChevronRightIcon />
          <span className="tracking-wider">more</span>
        </a>
      </Link>
    </CardContainer>
  );
};

ProjectCard.Empty = EmptyCard;

export default ProjectCard;
