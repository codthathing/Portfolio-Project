import { FaBars, FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ResumeButton from "../resume/ResumeButton";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";
import { motion, AnimatePresence } from "framer-motion";

const PageNavigation = ({ setNavigation, navigation }) => {
  const navigate = useNavigateToPage();
  const location = useLocation().pathname;  
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsHydrated(true), 3000);

    return () => clearTimeout(timeout);
  }, []);

  const pageNavigation = [
    { id: 0, text: "projects" },
    { id: 1, text: "resume" },
    { id: 4, text: "contact" },
  ];

  const Nav = ({ className, children, key, initial, animate, exit, transition }) => {
    return (
      <motion.nav key={key} initial={initial} animate={animate} exit={exit} transition={transition} className={`select-none ${className}`}>
        {pageNavigation.map(({ id, text }) => <span key={id} onClick={() => navigate(text)} className={`text-xs md:text-base lg:text-sm ${location === `/${text}` ? "text-grey-light bg-grey-semilight md:bg-transparent border-l-2 md:border-l-0 md:border-b-2 border-grey-light" : "text-gray-400"} px-4 py-2 md:p-0 ${location !== `/${text}` ? "transition-all ease-linear duration-200 hover:text-white" : ""} cursor-pointer font-Roboto uppercase`}>{text}</span>)}
        {children}
      </motion.nav>
    );
  };

  return (
    <>
      <div onClick={() => isHydrated && setNavigation(prevState => !prevState)} className="relative group select-none md:hidden cursor-pointer mr-4 md:m-0 border-2 border-gray-400 transition-all ease-linear duration-200 hover:border-white rounded-md w-8 h-8">
        {navigation ? <FaXmark className="absolute text-gray-400 transition-all ease-linear duration-200 group-hover:text-white text-sm left-0 right-0 top-0 bottom-0 m-auto" /> : <FaBars className="absolute text-gray-400 transition-all ease-linear duration-200 group-hover:text-white text-sm left-0 right-0 top-0 bottom-0 m-auto" />}
      </div>
      <AnimatePresence>
        {navigation && (
          <Nav
            initial={{ height: 0  }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.5, type: "tween", ease: "linear" }}
            className={"flex md:hidden absolute bg-dark-semi flex-col py-2 z-20 top-full overflow-hidden w-full"}>
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
