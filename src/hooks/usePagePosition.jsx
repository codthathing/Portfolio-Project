import { useMemo } from "react";

export const usePagePosition = (mobile, tab, desktop) => {
  const initialX = useMemo(() => {
    return window.innerWidth < 768 ? mobile : window.innerWidth < 1024 ? tab : desktop;
  }, []);

  return { initialX }
}