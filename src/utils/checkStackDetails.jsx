import { faCss3, faHtml5, faReact, faJava, faPython, faJs, faBootstrap, faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss, SiVercel, SiNetlify, SiGit, SiRedux, SiNextdotjs } from "react-icons/si";
import { faDatabase, faC } from "@fortawesome/free-solid-svg-icons";

export const checkStackDetails = (stack_name) => {
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
    case "bootstrap":
      return { icon: faBootstrap, text: "Bootstrap" };
    case "c":
      return { icon: faC, text: "" };
    case "git":
      return { icon: SiGit, text: "Git" };
    case "github":
      return { icon: faGithub, text: "Github" };
    case "tailwind css":
      return { icon: SiTailwindcss, text: "Tailwind CSS" };
    case "vercel":
      return { icon: SiVercel, text: "Vercel" };
    case "netlify":
      return { icon: SiNetlify, text: "Netlify" };
    case "nextjs":
      return { icon: SiNextdotjs, text: "NextJs" };
    case "redux":
      return { icon: SiRedux, text: "Redux" };
    default:
      break;
  };
};