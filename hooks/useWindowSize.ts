import { useState, useEffect } from "react";

export default function useWindowSize(): { innerWidth: number; innerHeight: number } {
  const [windowSize, setWindowSize] = useState({ innerWidth: 0, innerHeight: 0 });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    }
    if (windowSize.innerWidth === 0) handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
