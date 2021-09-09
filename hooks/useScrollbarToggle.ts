import { useEffect, useRef } from "react";

export default function useScrollbarToggle(toggle: boolean): void {
  const scrollbarWidthRef = useRef(0);
  useEffect(() => {
    function setScrollbarWidth(): void {
      scrollbarWidthRef.current = window.innerWidth - document.documentElement.clientWidth;
    }
    setScrollbarWidth();
    window.addEventListener("resize", setScrollbarWidth);
    return () => window.removeEventListener("resize", setScrollbarWidth);
  }, []);
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "";
    (document.querySelector("#layout") as HTMLDivElement).style.paddingRight = toggle
      ? `${scrollbarWidthRef.current}px`
      : "";
  }, [toggle]);
}
