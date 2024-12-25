import { useEffect, useState } from "react";

export const useRenderProjects = (featuredProjects) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const widthEventListener = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth < 768) {
        setCurrentIndex(1);
      } else if (currentWidth >= 768 && currentWidth < 1023) {
        setCurrentIndex(2);
      } else {
        setCurrentIndex(3);
      };
    };
    widthEventListener();
    window.addEventListener("resize", widthEventListener);
    return () => window.removeEventListener("resize", widthEventListener);
  }, []);

  const [paginationShown, setPaginationShown] = useState(0);
  useEffect(() => {
    if (currentIndex !== 0) {
      setPaginationShown(Math.ceil(featuredProjects.length / currentIndex));
    };
  }, [currentIndex]);

  const [newPaginationIndex, setNewPaginationIndex] = useState(0);
  const changeProjectsShownNext = () => {
    setNewPaginationIndex(prevState => prevState < paginationShown - 1 ? prevState + 1 : 0);
  };
  const changeProjectsShownPrev = () => {
    setNewPaginationIndex(prevState => prevState > 0 ? prevState - 1 : paginationShown - 1);
  };

  const [paginationLength, setPaginationLength] = useState([]);
  useEffect(() => {
    if (paginationShown) {
      setPaginationLength(Array(paginationShown).fill(""));
    };
  }, [paginationShown]);

  return { changeProjectsShownPrev, currentIndex, newPaginationIndex, changeProjectsShownNext, paginationLength };
};