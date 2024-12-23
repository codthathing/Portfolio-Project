import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faReact, faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { faExternalLink, faDatabase } from "@fortawesome/free-solid-svg-icons";

const ProjectsTemplate = ({ projectsArray }) => {
  const changeStackDetails = (stack_name) => {
    const stack_name_lower = stack_name.toLowerCase();
    switch (stack_name_lower) {
      case "css":
        return { icon: faCss3, text: "CSS" };
      case "html":
        return { icon: faHtml5, text: "HTML" };
      case "react":
        return { icon: faReact, text: "ReactJs" };
      case "java":
        return { icon: faJava, text: "Java" };
      case "python":
        return { icon: faPython, text: "Python" };
      case "javascript":
        return { icon: faJs, text: "JavaScript" };
      case "localstorage":
        return { icon: faDatabase, text: "localStorage" };
      case "tailwind css":
        return { icon: SiTailwindcss, text: "Tailwind CSS" };
      default:
        break;
    };
  };

  return (
    <main className="grid place-content-center md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 lg:gap-x-6 w-4/5 lg:w-10/12">
      {projectsArray.map(({ id, project_image, project_topic, project_text, project_stack }) => {
        return (
          <div key={id} className="flex flex-col bg-grey-semidark shadow-xl transition-all hover:-translate-y-2 active:translate-y-2 disabled:animate-pulse disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0 rounded-2xl overflow-hidden">
            <img src={project_image} alt={project_topic.toUpperCase()} className="w-full h-36 md:h-56 lg:h-52" />
            <section className="flex flex-col flex-1 p-4 md:p-6 lg:p-4">
              <h1 className="capitalize font-bold text-base md:text-2xl lg:text-xl text-white font-Yantramanav">{project_topic}</h1>
              <div className="my-4 md:my-6 lg:my-4 flex-1"><p className="text-xs md:text-lg lg:text-base limit-text-line text-grey-textdark font-Roboto">{project_text}</p></div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2 lg:gap-x-2 lg:gap-y-1 text-[8px] md:text-lg lg:text-sm">
                {project_stack.map(({ id, stack_name }) => {
                  const stackDetails = changeStackDetails(stack_name);
                  return (
                    <span key={id} className="px-3 py-1 md:px-6 md:py-2 lg:px-2 lg:py-1 rounded-full flex items-center gap-x-1 md:gap-x-2 lg:gap-x-1 border border-grey-borderdark text-white">
                      {stack_name.toLowerCase() === "tailwind css" ? <stackDetails.icon /> : <FontAwesomeIcon icon={stackDetails.icon} /> }
                      <p className="font-semibold">{stackDetails.text}</p>
                    </span>
                  );
                })}
              </div>
              <FontAwesomeIcon icon={faExternalLink} className="self-end mt-4 md:mt-6 lg:mt-4 text-xs md:text-lg lg:text-base text-white cursor-pointer" />
            </section>
          </div>
        );
      })}
    </main>
  );
};

export default ProjectsTemplate;