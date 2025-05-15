import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResumeButton from "../resume/ResumeButton";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import { motion, AnimatePresence } from "framer-motion";

const PageNavigation = () => {
  const navigate = useNavigateToPage();
  const location = useLocation().pathname;
  const [isHydrated, setIsHydrated] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    setShowNavigation(false);
    const timeout = setTimeout(() => setIsHydrated(true), 3000);

    return () => clearTimeout(timeout);
  }, []);

  const pageNavigation = [
    { id: 0, text: "projects" },
    { id: 1, text: "resume" },
    { id: 4, text: "contact" },
  ];

  const Nav = ({ className, children, initial, animate, exit, transition }) => {
    return (
      <motion.nav initial={initial} animate={animate} exit={exit} transition={transition} className={`select-none ${className}`}>
        {pageNavigation.map(({ id, text }) => (
          <span key={id} onClick={() => location !== `/${text}` && navigate(text)} className={`text-xs md:text-base lg:text-sm ${location === `/${text}` ? "text-grey-light bg-grey-semilight md:bg-transparent border-l-2 md:border-l-0 md:border-b-2 border-grey-light" : "text-gray-400"} px-4 py-2 md:p-0 ${location !== `/${text}` ? "transition-all ease-linear duration-200 hover:text-white" : ""} cursor-pointer font-Roboto uppercase`}>
            {text}
          </span>
        ))}
        {children}
      </motion.nav>
    );
  };

  const HamburgerButton = ({ isOpen, toggle }) => {
    return (
      <button onClick={toggle} className="flex md:hidden flex-col gap-y-1 mr-4 p-1 rounded-md border-2 border-gray-400">
        <motion.div initial={{ width: 16 }} animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4.85 : 0, transition: { type: "tween", duration: 0.35 } }} className="h-[2px] bg-gray-400 origin-center" />
        <motion.div initial={{ width: 16 }} animate={{ opacity: isOpen ? 0 : 1, width: isOpen ? 0 : 16, transition: { type: "tween", duration: 0.35 } }} className="h-[2px] bg-gray-400" />
        <motion.div initial={{ width: 16 }} animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4.85 : 0, transition: { type: "tween", duration: 0.35 } }} className="h-[2px] bg-gray-400 origin-center" />
      </button>
    );
  };

  return (
    <>
      <HamburgerButton isOpen={showNavigation} toggle={() => isHydrated && setShowNavigation((prevState) => !prevState)} />
      <AnimatePresence initial={false}>
        {showNavigation && (
          <Nav initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.35, type: "tween", ease: "linear" }} className={"flex md:hidden absolute bg-dark-semi flex-col py-2 z-20 top-full overflow-hidden w-full"}>
            <ResumeButton mainClass={"flex md:hidden self-end w-fit"} />
          </Nav>
        )}
      </AnimatePresence>
      <Nav className={"hidden md:flex md:gap-x-6 lg:gap-x-16"} />
      <ResumeButton mainClass={"hidden md:flex select-none"} />
    </>
  );
};

export default PageNavigation;
