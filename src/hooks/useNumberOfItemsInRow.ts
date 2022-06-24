import { useState, useEffect } from "react";
import { useDebouncedEffect } from "./useDebounceEffect";

const breakpoints = [680, 1000, 1320, 1600];

const getNumberOfItemsInRow = (windowWidth: number) =>
  windowWidth < breakpoints[0]
    ? 1
    : windowWidth < breakpoints[1]
    ? 2
    : windowWidth < breakpoints[2]
    ? 3
    : windowWidth < breakpoints[3]
    ? 4
    : 5;

const useNumberOfItemsInRow = (): number => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsInRowNumber, setItemsInRowNumber] = useState(
    getNumberOfItemsInRow(windowWidth)
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useDebouncedEffect(
    () => setItemsInRowNumber(getNumberOfItemsInRow(windowWidth)),
    300,
    [windowWidth]
  );

  return itemsInRowNumber;
};

export { useNumberOfItemsInRow };
