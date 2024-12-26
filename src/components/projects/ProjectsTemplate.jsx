import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { checkStackDetails } from "../../utils/checkStackDetails";

const ProjectsTemplate = ({ projectsArray }) => {
  return (
    <main className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-6 w-4/5 lg:w-10/12">
      {projectsArray.map(({ id, project_image, project_topic, project_text, project_github, project_link, project_stack }) => {
        return (
          <div key={id} className="flex flex-col bg-grey-semidark shadow-xl transition-all hover:-translate-y-2 active:translate-y-2 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0 rounded-2xl overflow-hidden">
            <img src={project_image} alt={project_topic.toUpperCase()} className="w-full h-36 md:h-56 lg:h-52" />
            <section className="flex flex-col flex-1 p-4 md:p-6 lg:p-4">
              <h1 className="capitalize font-bold text-base md:text-2xl lg:text-xl text-white font-Yantramanav">{project_topic}</h1>
              <div className="my-4 md:my-6 lg:my-4 flex-1"><p className="text-xs md:text-lg lg:text-base limit-text-line text-grey-textdark font-Roboto">{project_text}</p></div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2 lg:gap-x-2 lg:gap-y-1 text-[8px] md:text-lg lg:text-sm">
                {project_stack.map(({ id, stack_name }) => {
                  const stackDetails = checkStackDetails(stack_name);
                  return (
                    <span key={id} className="px-3 py-1 md:px-6 md:py-2 lg:px-2 lg:py-1 rounded-full flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1 border border-grey-borderdark text-white">
                      {stack_name.toLowerCase() === "tailwind css" ? <stackDetails.icon /> : <FontAwesomeIcon icon={stackDetails.icon} />}
                      <p className="font-semibold font-Roboto">{stackDetails.text}</p>
                    </span>
                  );
                })}
              </div>
              <div className="flex items-center gap-x-8 md:gap-x-12 lg:gap-x-10 self-end mt-4 md:mt-6 lg:mt-4 text-xs md:text-lg lg:text-base text-white">
                <a href={`https://github.com/codthathing/${project_github}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FontAwesomeIcon icon={faGithub} /></a>
                <a href={`https://${project_link}`} target="_blank" rel="noopener noreferrer" className="cursor-pointer"><FontAwesomeIcon icon={faExternalLink} /></a>
              </div>
            </section>
          </div>
        );
      })}
    </main>
  );
};

export default ProjectsTemplate;