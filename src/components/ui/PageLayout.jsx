import { Outlet, useLocation, useNavigate } from "react-router-dom";
import NavComponent from "./NavComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const PageLayout = () => {
  const navigate = useNavigate();
  const socialsPages = [
    {id: 0, icon: faXTwitter, socialsLink: "https://x.com/codthathing"},
    {id: 1, icon: faLinkedin, socialsLink: "https://linkedin.com/in/codthathing"},
    {id: 2, icon: faGithub, socialsLink: "https://github.com/codthathing"},
  ];

  const location = useLocation().pathname;

  return (
    <div className="bg-dark-semi relative h-screen flex flex-col overflow-hidden">
      <header className=" relative py-4 md:py-8 md:px-14 lg:py-5 lg:px-16 2xl:px-24 flex justify-between items-center">
        <i className="ml-4 cursor-pointer text-white px-2 py-1 md:px-3.5 md:py-2 lg:px-3 lg:py-1.5 text-base md:text-2xl lg:text-xl border border-white rounded-md" onClick={() => navigate("/")}>AS</i>
        <NavComponent />
      </header>
      <section className="flex-1 overflow-y-auto change-scrollbar">
        <Outlet />
      </section>
      <footer className={`flex p-4 md:py-8 md:px-10 lg:py-5 lg:px-16 justify-between items-center`}>
        <div className={`${location !== "/" ? "invisible": ""} md:visible flex items-center gap-x-5 md:gap-x-10 lg:gap-x-7`}>
          {socialsPages.map(({id, icon, socialsLink}) => <a key={id} target="_blank" href={socialsLink}><FontAwesomeIcon icon={icon} className="text-gray-400 text-base md:text-2xl lg:text-xl transition-all ease-linear duration-200 hover:scale-125" /></a>)}
        </div>
        <div className="bg-gray-300/10 backdrop-blur-sm rounded-full shadow-lg w-auto p-1 flex gap-x-1">
          hello
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;