import { FaBars, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResumeButton from "../resume/ResumeButton";
import { useNavigateToPage } from "../../hooks/useNavigateToPage";

const PageNavigation = () => {
  const navigate = useNavigateToPage();

  const location = useLocation().pathname;

  const [showNavigation, setShowNavigation] = useState(false);

  const pageNavigation = [
    { id: 0, text: "projects" },
    { id: 1, text: "resume" },
    { id: 4, text: "contact" },
  ];

  useEffect(() => {
    setShowNavigation(false);
  }, [location]);

  return (
    <>
      <div onClick={() => setShowNavigation(!showNavigation)} className="relative group md:hidden cursor-pointer mr-4 md:m-0 border-2 border-gray-400 transition-all ease-linear duration-200 hover:border-white rounded-md w-8 h-8">
        { showNavigation ? <FaXmark className="absolute text-gray-400 transition-all ease-linear duration-200 group-hover:text-white text-sm left-0 right-0 top-0 bottom-0 m-auto" /> : <FaBars className="absolute text-gray-400 transition-all ease-linear duration-200 group-hover:text-white text-sm left-0 right-0 top-0 bottom-0 m-auto" /> }
      </div>
      <nav className={`${showNavigation ? "flex" : "hidden"} z-20 md:flex absolute bg-dark-semi md:bg-transparent flex-col py-2 md:p-0 top-full md:top-0 w-full md:w-fit md:relative md:flex-row md:gap-x-6 lg:gap-x-16`}>
        {pageNavigation.map(({ id, text }) => <span key={id} onClick={() => navigate(text)} className={`text-xs md:text-base lg:text-sm ${location === `/${text}` ? "text-grey-light bg-grey-semilight md:bg-transparent border-l-2 md:border-l-0 md:border-b-2 border-grey-light" : "text-gray-400"} px-4 py-2 md:p-0 ${location !== `/${text}` ? "transition-all ease-linear duration-200 hover:text-white" : ""} cursor-pointer font-Roboto uppercase`}>{text}</span>)}
        <ResumeButton mainClass={"flex md:hidden self-end w-fit"} />
      </nav>
      <ResumeButton mainClass={"hidden md:flex"} />
    </>
  );
};

export default PageNavigation;