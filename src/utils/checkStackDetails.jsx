import { SiTailwindcss, SiVercel, SiNetlify, SiRedux, SiNextdotjs, SiTypescript, SiGit, SiSupabase, SiFramer, SiJest, SiTestinglibrary } from "react-icons/si";
import { FaC, FaJava, FaJs, FaDatabase, FaCss3, FaHtml5, FaReact, FaPython, FaBootstrap, FaGithub } from "react-icons/fa6";

export const checkStackDetails = (stack_name) => {
  const stack_name_lower = stack_name.toLowerCase();
  switch (stack_name_lower) {
    case "html":
      return { Icon: FaHtml5, text: "HTML" };
    case "css":
      return { Icon: FaCss3, text: "CSS" };
    case "bootstrap":
      return { Icon: FaBootstrap, text: "Bootstrap" };
    case "tailwind css":
      return { Icon: SiTailwindcss, text: "Tailwind CSS" };
    case "javascript":
      return { Icon: FaJs, text: "JavaScript" };
    case "typescript":
      return { Icon: SiTypescript, text: "TypeScript" };
    case "react":
      return { Icon: FaReact, text: "ReactJs" };
    case "nextjs":
      return { Icon: SiNextdotjs, text: "NextJs" };
    case "redux":
      return { Icon: SiRedux, text: "Redux" };
    case "jest":
      return { Icon: SiJest, text: "Jest" };
    case "rtl":
      return { Icon: SiTestinglibrary, text: "React Testing Library" };
    case "framer motion":
      return { Icon: SiFramer, text: "Framer Motion" };
    case "supabase":
      return { Icon: SiSupabase, text: "Supabase" };
    case "java":
      return { Icon: FaJava, text: "Java" };
    case "python":
      return { Icon: FaPython, text: "Python" };
    case "c":
      return { Icon: FaC, text: "" };
    case "localstorage":
      return { Icon: FaDatabase, text: "localStorage" };
    case "index db":
      return { Icon: FaDatabase, text: "IndexDB" };
    case "git":
      return { Icon: SiGit, text: "Git" };
    case "github":
      return { Icon: FaGithub, text: "Github" };
    case "vercel":
      return { Icon: SiVercel, text: "Vercel" };
    case "netlify":
      return { Icon: SiNetlify, text: "Netlify" };
    default:
      break;
  };
};