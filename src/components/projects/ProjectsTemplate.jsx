import { FaBookOpen, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import StackSpan from "../common/StackSpan";
import { motion, AnimatePresence } from "framer-motion";
import { usePagePosition } from "../../hooks/usePagePosition";

const ProjectsTemplate = ({ projectsArray, keyId, animation }) => {
  const { initialX } = usePagePosition(-600, -750, -1400);
  const { initialX: exitX } = usePagePosition(600, 750, 1400);

  const mainVariants = {
    rightInitial: { x: initialX },
    rightExit: { x: exitX },
    transition: { type: "tween", duration: 0.35, ease: "linear" },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main key={keyId} variants={mainVariants} initial={animation.initial} exit={animation.exit} animate={{ x: 0 }} transition="transition" className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-6">
        {projectsArray.map(({ id, project_image, project_topic, project_text, project_github, project_link, project_stack }) => {
          return (
            <div key={id} className="flex flex-col select-none bg-grey-semidark shadow-xl rounded-2xl overflow-hidden">
              <img src={project_image} loading="lazy" fetchpriority="high" alt={project_topic.toUpperCase()} className="w-full h-36 md:h-56 lg:h-52" />
              <section className="flex flex-col flex-1 p-4 md:p-6 lg:px-4 lg:py-6">
                <div className="flex justify-between items-center text-white">
                  <h1 className="capitalize font-bold text-base md:text-2xl lg:text-xl font-Yantramanav">{project_topic}</h1>
                  <FaBookOpen className="cursor-pointer" />
                </div>
                <div className="my-4 md:my-6 lg:my-6 flex-1 overflow-hidden">
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
          );
        })}
      </motion.main>
    </AnimatePresence>
  );
};

export default ProjectsTemplate;
