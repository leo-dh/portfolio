import { m, useElementScroll, useTransform } from "framer-motion";
import {
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent as ReactMouseEvent,
} from "react";

export function useCustomScrollbar(
  containerRef: RefObject<HTMLElement>
): [boolean, () => JSX.Element] {
  const scrollbarTrackRef = useRef<HTMLDivElement | null>(null);
  const [showScrollbar, setShowScrollbar] = useState(false);
  const [scrollbarHeight, setScrollbarHeight] = useState(0);
  const [scrollRatio, setScrollRatio] = useState(0);
  const { scrollY } = useElementScroll(containerRef);
  const scrollbarPosition = useTransform(scrollY, (value) => {
    const scrollHeight = containerRef.current?.scrollHeight || 1;
    return `${(value / scrollHeight) * 100}%`;
  });
  useEffect(() => {
    const { scrollHeight, clientHeight, offsetHeight } = containerRef.current as HTMLDivElement;
    const show = scrollHeight > clientHeight;
    setShowScrollbar(show);
    const scrollbarTrackHeight = offsetHeight - 8;
    const scrollRatio = clientHeight / scrollHeight;
    setScrollRatio(scrollRatio);
    setScrollbarHeight(scrollRatio * scrollbarTrackHeight);
  }, []);

  const handleDrag = useCallback(
    (e: ReactMouseEvent) => {
      if (!containerRef.current) return;
      containerRef.current.style.userSelect = "none";
      const top = containerRef.current.scrollTop;
      const y = e.clientY;
      const mouseMoveHandler = (moveEvent: MouseEvent): void => {
        if (!containerRef.current) return;
        const dy = moveEvent.clientY - y;
        containerRef.current.scrollTop = top + dy / scrollRatio;
      };
      window.addEventListener("mousemove", mouseMoveHandler);
      window.addEventListener(
        "mouseup",
        () => {
          window.removeEventListener("mousemove", mouseMoveHandler);
          if (!containerRef.current) return;
          containerRef.current.style.userSelect = "auto";
        },
        { once: true }
      );
    },
    [containerRef, scrollRatio]
  );

  const Scrollbar = (): JSX.Element => (
    <m.div
      className="absolute top-1 right-0.5 bottom-1 w-1.5 rounded-full z-[60]"
      id="scrollbar-track"
      ref={scrollbarTrackRef}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.3, delay: 0.2 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.15 } }}
      onMouseDown={(e) => {
        // Jump to clicked location
        if (!containerRef.current) return;
        const bound = (e.target as HTMLDivElement).getBoundingClientRect();
        const percentage = (e.clientY - bound.top) / bound.height;
        const { scrollHeight, clientHeight } = containerRef.current;
        containerRef.current.scrollTop = percentage * (scrollHeight - clientHeight);

        handleDrag(e);
      }}
    >
      <m.div
        className={`left-0 right-0 rounded-full absolute select-none`}
        id="scrollbar-thumb"
        style={{
          top: scrollbarPosition,
          height: `${scrollbarHeight}px`,
          background: "rgba(0, 0, 0, 0.2)",
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          handleDrag(e);
        }}
        whileTap={{ background: "rgba(0,0,0,0.4)" }}
        whileHover={{ background: "rgba(0,0,0,0.3)" }}
      ></m.div>
    </m.div>
  );

  return [showScrollbar, Scrollbar];
}
