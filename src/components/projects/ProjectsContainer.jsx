import { FaBookOpen, FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import StackSpan from "../common/StackSpan";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { motion } from "motion/react";

export default function ProjectsContainer({ project_image, project_topic, project_text, project_stack, project_github, project_link, id }) {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      <div onClick={() => setShowPopUp(false)} className={`bg-grey-dark/70 backdrop-blur-sm fixed w-full h-full top-0 left-0 z-10 ${showPopUp ? "flex" : "hidden"} justify-center items-center`}>
        <motion.div initial={{ width: 0, height: 0 }} transition={{ delay: 1, duration: 4 }} animate={{ height: "fit-content", width: "auto" }} className="flex flex-col gap-y-8 w-4/5 md:w-3/5 lg:w-[30%]">
          <div className="bg-neutral-700/50 w-10 h-10 md:w-16 md:h-16 lg:w-10 lg:h-10 rounded-full self-center flex justify-center items-center cursor-pointer" onClick={() => setShowPopUp(false)}>
            <FaX className="text-gray-400 text-xs md:text-lg lg:text-sm" />
          </div>
          <main className="bg-neutral-900 rounded-md overflow-hidden w-full">
            <img src={project_image} alt={project_topic.toUpperCase()} className="w-full h-52 md:h-72 lg:h-64" />
            <section className="flex flex-col flex-1 p-4 md:p-6 lg:px-4 lg:py-6">
              <h1 className="capitalize font-bold text-base md:text-2xl lg:text-xl text-white font-Yantramanav">{project_topic}</h1>
              <div className="my-4 md:my-6 lg:my-4 flex-1">
                <p className="text-xs md:text-lg lg:text-base text-grey-textdark font-Roboto">{project_text}</p>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2 lg:gap-x-2 lg:gap-y-1 text-[8px] md:text-lg lg:text-sm">
                <StackSpan stackArray={project_stack} className={"border-[0.5px] md:border border-grey-borderdark text-white"} />
              </div>
              <div className="flex items-center gap-x-8 md:gap-x-12 lg:gap-x-10 text-xs md:text-lg lg:text-base mt-4 md:mt-8 lg:mt-6 text-white self-end">
                <a href={`https://github.com/codthathing/${project_github}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <FaGithub />
                </a>
                <a href={`https://${project_link}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </section>
          </main>
        </motion.div>
      </div>
      <div key={id} className="flex flex-col select-none bg-grey-semidark shadow-xl rounded-2xl overflow-hidden">
        <img src={project_image} loading="lazy" fetchpriority="high" alt={project_topic.toUpperCase()} className="w-full h-36 md:h-56 lg:h-44" />
        <section className="flex flex-col flex-1 p-4 md:p-6 lg:px-4 lg:py-6">
          <div className="flex justify-between items-center text-white">
            <h1 className="capitalize font-bold text-base md:text-2xl lg:text-xl font-Yantramanav">{project_topic}</h1>
            <FaBookOpen className="cursor-pointer" onClick={() => setShowPopUp(true)} />
          </div>
          <div className="my-4 md:my-6 lg:my-4 flex-1">
            <p className="text-xs md:text-lg lg:text-base line-clamp-4 md:line-clamp-3 text-grey-textdark font-Roboto">{project_text}</p>
          </div>
          <div className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2 lg:gap-x-2 lg:gap-y-1 text-[8px] md:text-lg lg:text-sm">
            <StackSpan stackArray={project_stack} className={"border-[0.5px] md:border border-grey-borderdark text-white"} />
          </div>
          <div className="flex items-center gap-x-8 md:gap-x-12 lg:gap-x-10 text-xs md:text-lg lg:text-base mt-4 md:mt-8 lg:mt-6 text-white self-end">
            <a href={`https://github.com/codthathing/${project_github}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaGithub />
            </a>
            <a href={`https://${project_link}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <FaExternalLinkAlt />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
