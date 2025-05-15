import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import ResumeButton from "../resume/ResumeButton";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

const PageNavigation = () => {
  const navigate = useNavigateToPage();
  const location = useLocation().pathname;
  // const [isHydrated, setIsHydrated] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    setShowNavigation(false);
    //   const timeout = setTimeout(() => setIsHydrated(true), 3000);

    //   return () => clearTimeout(timeout);
  }, [location]);

  const pageNavigation = [
    { id: 0, text: "projects" },
    { id: 1, text: "resume" },
    { id: 4, text: "contact" },
  ];

  const Nav = memo(({ className, children, initial, animate, exit, transition }) => {
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
  });

  const HamburgerButton = memo(({ isOpen, toggle }) => {
    return (
      <MotionConfig transition={{ duration: 0.35, ease: "easeInOut" }}>
        <motion.button onClick={toggle} animate={isOpen ? "open" : "close"} initial={false} className="relative md:hidden h-8 w-8 mr-4 rounded-md border-2 border-gray-400">
          <motion.div variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["25%", "50%", "50%"] }, close: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "25%"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "25%" }} className="absolute h-[2px] w-[16px] bg-gray-400" />
          <motion.div variants={{ open: { rotate: ["0deg", "0deg", "-45deg"] }, close: { rotate: ["-45deg", "0deg", "0deg"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "50%" }} className="absolute h-[2px] w-[16px] bg-gray-400" />
          <motion.div variants={{ open: { rotate: ["0deg", "0deg", "45deg"], top: ["75%", "50%", "50%"] }, close: { rotate: ["45deg", "0deg", "0deg"], top: ["50%", "50%", "75%"] } }} style={{ x: "-50%", left: "50%", y: "-50%", top: "75%" }} className="absolute h-[2px] w-[16px] bg-gray-400" />
        </motion.button>
      </MotionConfig>
    );
  });

  //  isHydrated &&

  return (
    <>
      <HamburgerButton isOpen={showNavigation} toggle={() => setShowNavigation((prevState) => !prevState)} />
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

export default memo(PageNavigation);
