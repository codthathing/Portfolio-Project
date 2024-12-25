import { faCss3, faHtml5, faReact, faJava, faPython, faJs } from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

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
    case "tailwind css":
      return { icon: SiTailwindcss, text: "Tailwind CSS" };
    default:
      break;
  };
};