import { FaBookOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import StackSpan from "../common/StackSpan";
import { useState } from "react";
import ProjectsModal from "./ProjectsModal";

export default function ProjectsContainer({ id, project_image, project_topic, project_text, project_description, project_status, project_architecture, project_features, project_stack, project_github, project_link, project_upcoming }) {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      {showPopUp && <ProjectsModal setModal={setShowPopUp} project_image={project_image} project_topic={project_topic} project_text={project_text} project_description={project_description} project_status={project_status} project_architecture={project_architecture} project_features={project_features} project_stack={project_stack} project_link={project_link} project_github={project_github} project_upcoming={project_upcoming} />}
      <div key={id} className="flex flex-col select-none bg-grey-semidark shadow-xl border border-[#414141] overflow-hidden">
        <img src={project_image} loading="lazy" fetchpriority="high" alt={project_topic.toUpperCase()} className="w-full h-36 md:h-46 lg:h-44" />
        <section className="flex flex-col flex-1 p-4 md:p-6 lg:px-4 lg:py-6">
          <div className="flex justify-between items-center text-white">
            <h1 className="capitalize font-bold text-base md:text-2xl lg:text-xl font-Yantramanav">{project_topic}</h1>
            <FaBookOpen className="transition-all ease-linear duration-200 hover:scale-125 cursor-pointer" onClick={() => setShowPopUp(true)} />
          </div>
          <div className="my-4 md:my-6 lg:my-4 flex-1">
            <p className="text-xs md:text-lg lg:text-sm line-clamp-5 md:line-clamp-4 text-grey-textdark font-Roboto">{project_text}</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-2 md:gap-y-2 lg:gap-x-2 lg:gap-y-1 text-[8px] md:text-xs lg:text-xs">
            <StackSpan stackArray={project_stack} className={"border-[0.5px] md:border border-grey-borderdark text-white rounded-full"} />
          </div>
          <div className="flex items-center gap-x-8 md:gap-x-12 lg:gap-x-10 text-xs md:text-lg lg:text-base mt-4 md:mt-8 lg:mt-6 text-white self-end">
            <a href={`https://github.com/codthathing/${project_github}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaGithub className="transition-all ease-linear duration-200 hover:scale-125" />
            </a>
            <a href={`https://${project_link}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaExternalLinkAlt className="transition-all ease-linear duration-200 hover:scale-125" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
