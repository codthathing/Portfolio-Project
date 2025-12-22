import { motion, AnimatePresence } from "framer-motion";
import { usePagePosition } from "../../hooks/usePagePosition";
import ProjectsContainer from "./ProjectsContainer";

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
          return <ProjectsContainer id={id} project_image={project_image} project_topic={project_topic} project_text={project_text} project_github={project_github} project_link={project_link} project_stack={project_stack} />;
        })}
      </motion.main>
    </AnimatePresence>
  );
};

export default ProjectsTemplate;
