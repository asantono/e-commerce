import { useState, useEffect } from "react";

const useScrollTracker = (offset = 0) => {
  const [tooClose, setTooClose] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let addedVals = window.scrollY + window.innerHeight + offset;
      document.activeElement.scrollHeight - addedVals <= 0
        ? setTooClose(true)
        : setTooClose(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    tooClose,
    scrollY: window.scrollY,
    windowHeight: window.innerHeight,
    documentHeight: document.activeElement.scrollHeight,
  };
};

export default useScrollTracker;
