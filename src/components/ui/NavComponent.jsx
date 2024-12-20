import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faDownload } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ResumeButton from "../common/ResumeButton";

const NavComponent = () => {
  const navigate = useNavigate();

  const location = useLocation().pathname;

  const [showNavigation, setShowNavigation] = useState(false);

  const pageNavigation = [
    { id: 0, text: "projects" },
    { id: 1, text: "resume" },
    { id: 2, text: "skills" },
    { id: 3, text: "achievement" },
    { id: 4, text: "contact" },
  ];

  useEffect(() => {
    setShowNavigation(false);
  }, [location]);

  return (
    <>
      <div onClick={() => setShowNavigation(!showNavigation)} className="group md:hidden cursor-pointer mr-4 border-2 border-gray-400 transition-all ease-linear duration-200 hover:border-white rounded-md py-0.5 px-2">
        <FontAwesomeIcon icon={faBars} className="text-gray-400 transition-all ease-linear duration-200 group-hover:text-white text-sm" />
      </div>
      <nav className={`${showNavigation ? "flex" : "hidden"} z-20 md:flex absolute bg-dark-semi md:bg-transparent flex-col py-2 md:p-0 top-full md:top-0 w-full md:w-fit md:relative md:flex-row md:gap-x-6 lg:gap-x-16`}>
        {pageNavigation.map(({ id, text }) => <span key={id} onClick={() => navigate(`/${text}`)} className={`text-xs md:text-base lg:text-sm ${location === `/${text}` ? "text-grey-light bg-grey-semilight md:bg-transparent border-l-2 md:border-l-0 md:border-b-2 border-grey-light" : "text-gray-400"} px-4 py-2 md:p-0 ${location !== `/${text}` ? "transition-all ease-linear duration-200 hover:text-white" : ""} cursor-pointer font-Roboto uppercase`}>{text}</span>)}
        <ResumeButton mainClass={"flex md:hidden self-end w-fit"} />
      </nav>
    </>
  );
};

export default NavComponent;