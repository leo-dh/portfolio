import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useElementScroll, useTransform, useDragControls } from "framer-motion";
import { CrossIcon, GitHubIcon } from "./Icons";
import LinkButton from "./LinkButton";
import { GITHUB_PROFILE, PROJECTS_DETAILS } from "@utils/PublicData";

interface ProjectModalProps {
  callback: () => void;
  index: number | null;
}

const LINKS = [
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
    Icon: GitHubIcon,
  },
];

const ProjectModal = ({ callback, index }: ProjectModalProps): JSX.Element => {
  // #TODO add custom scrollbar for desktop viewport
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollbarTrackRef = useRef<HTMLDivElement | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const { scrollYProgress } = useElementScroll(containerRef);
  const scrollbarPosition = useTransform(scrollYProgress, (value) => {
    const scrollbarTrackHeight = (containerRef.current?.offsetHeight || 0) - 8;
    return value * (scrollbarTrackHeight - scrollbarHeight);
  });
  useEffect(() => {
    const { scrollHeight, clientHeight, offsetHeight } = containerRef.current as HTMLDivElement;
    const show = scrollHeight > clientHeight;
    setShowScrollbar(show);
    const scrollbarTrackHeight = offsetHeight - 8;
    setScrollbarHeight(Math.floor((clientHeight / scrollHeight) * scrollbarTrackHeight));
  }, []);

  const dragControls = useDragControls();

  const { tags, title } = PROJECTS_DETAILS[index ?? 0];
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
          {showScrollbar && (
            <div
              className="absolute top-1 right-0.5 bottom-1 w-1.5 rounded-full z-[60]"
              id="scrollbar-track"
              ref={scrollbarTrackRef}
              onMouseDown={(e) => {
                // Snap to cursor does not work for now
                // To track issue https://github.com/framer/motion/issues/1216
                dragControls.start(e, { snapToCursor: true });
              }}
            >
              <motion.div
                className={`left-0 right-0 rounded-full`}
                id="scrollbar-thumb"
                style={{
                  y: scrollbarPosition,
                  height: `${scrollbarHeight}px`,
                  background: "rgba(0, 0, 0, 0.2)",
                }}
                drag="y"
                dragConstraints={scrollbarTrackRef}
                dragElastic={0}
                dragControls={dragControls}
                onDrag={(e, info) => {
                  containerRef.current!.scrollTop += info.delta.y;
                }}
                whileTap={{ background: "rgba(0,0,0,0.4)" }}
                whileHover={{ background: "rgba(0,0,0,0.3)" }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3, delay: 0.2 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              ></motion.div>
            </div>
          )}
          <motion.div
            className="h-56 tablet:h-64 desktop:h-96 relative flex-shrink-0"
            layoutId={`image-${index}`}
          >
            <Image src="/thumbnails/citypop.jpeg" layout="fill" objectFit="cover" />
            <motion.div
              className="absolute -bottom-16 left-4 flex flex-col text-white tablet:left-6 desktop:-bottom-20 desktop:left-8"
              layoutId={`content-${index}`}
            >
              <motion.p className="font-light desktop:text-xl">{title}</motion.p>
              <motion.div className="gap-x-2 flex flex-wrap items-center mt-2">
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
          <motion.div className="pb-8 bg-shark-500 px-4 text-white flex flex-col tablet:px-6 desktop:px-8 desktop:pb-16">
            <div className="border-l-4 border-jungle-green-500 font-bold pl-4 text-lg mt-28 desktop:mt-36 desktop:text-xl">
              What is it?
            </div>
            <p className="mt-4 text-sm desktop:text-base desktop:mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem alias facilis culpa
              commodi nam placeat error quidem ipsa officia recusandae!
            </p>
            <div className="mt-16 border-l-4 border-jungle-green-500 font-bold pl-4 text-lg desktop:text-xl">
              Links
            </div>
            <div className="mt-4 text-sm desktop:text-base desktop:mt-6">
              {LINKS.map(({ Icon, href, label }) => (
                <LinkButton
                  href={href}
                  label={label}
                  icon={<Icon className="w-6 h-6 tablet:w-8 tablet:h-8" />}
                  key={label}
                  target="_blank"
                  rel="noreferrer"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ProjectModal;
