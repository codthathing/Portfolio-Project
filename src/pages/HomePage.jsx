import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faMobile } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import HomeName from "../components/ui/HomeName";

const HomePage = () => {
  const fronPageLinks = [
    { id: 0, icon: faArrowRight, text: "view projects", destination: "/projects" },
    { id: 1, icon: faMobile, text: "contact me", destination: "/contact" },
  ];
  const navigate = useNavigate();

  return (
    <main className="main-center">
      <div className="uppercase">
        <p className="font-Roboto text-gray-400 tracking-widest text-xs md:text-base lg:text-sm">hey, i'm</p>
        <HomeName name={"OLUWASEGUN"} className={"my-2 md:my-4"} />
        <p className="font-Yantramanav text-gray-400 tracking-wider text-sm md:text-xl lg:text-base text-right">a frontend engineer</p>
        <div className="flex items-center justify-between mt-5 md:mt-12 lg:mt-14 text-xs md:text-base lg:text-sm">
          {fronPageLinks.map(({ id, icon, text, destination }) => {
            return (
              <main key={id} onClick={() => navigate(destination)} className="group text-gray-400 transition-all ease-linear duration-200 hover:text-white flex items-center gap-x-2 md:gap-x-3 lg:gap-x-4 cursor-pointer">
                <FontAwesomeIcon icon={icon} className="text-base md:text-2xl lg:text-xl" />
                <span className="font-Roboto tracking-wider border-b border-gray-400 transition-all ease-linear duration-200 group-hover:border-white pb-0.5 lg:pb-1">{text}</span>
              </main>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default HomePage;