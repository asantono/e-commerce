import { useState, useEffect } from "react";

const useScrollTracker = (offset = 0) => {
  const [tooClose, setTooClose] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      let addedVals = window.scrollY + window.innerHeight + offset;
      document.documentElement.scrollHeight - addedVals <= 0
        ? setTooClose(true)
        : setTooClose(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return {
    tooClose,
    scrollY: window.scrollY,
    windowHeight: window.innerHeight,
    documentHeight: document.documentElement.scrollHeight,
  };
};

export default useScrollTracker;
