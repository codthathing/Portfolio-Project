import { SiDotnet, SiAmazons3, SiPostgresql, SiTailwindcss, SiRedux, SiNextdotjs, SiTypescript, SiGit, SiSupabase, SiFramer, SiJest, SiTestinglibrary, SiExpress, SiMongodb, SiFastapi, SiSqlalchemy, SiSqlite, SiJsonwebtokens, SiSpringboot, SiSpringsecurity, SiApachemaven, SiSocketdotio, SiHibernate } from "react-icons/si";
import { FaJava, FaJs, FaDatabase, FaCss3, FaHtml5, FaReact, FaPython, FaGithub, FaPhp, FaNodeJs } from "react-icons/fa6";
import { LuBrainCircuit } from "react-icons/lu";
import { TbBrandCSharp } from "react-icons/tb";
import { SiGreensock } from "react-icons/si";

export const checkStackDetails = (stack_name) => {
  const stack_name_lower = stack_name.toLowerCase();
  switch (stack_name_lower) {
    case "html":
      return { Icon: FaHtml5, text: "HTML" };
    case "css":
      return { Icon: FaCss3, text: "CSS" };
    case "tailwind":
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
    case "motion":
      return { Icon: SiFramer, text: "Motion" };
    case "gsap":
      return { Icon: SiGreensock, text: "Gsap" };
    case "supabase":
      return { Icon: SiSupabase, text: "Supabase" };
    case "nodejs":
      return { Icon: FaNodeJs, text: "NodeJs" };
    case "java":
      return { Icon: FaJava, text: "Java" };
    case "python":
      return { Icon: FaPython, text: "Python" };
    case "csharp":
      return { Icon: TbBrandCSharp, text: "" };
    case "aspdotnet":
      return { Icon: SiDotnet, text: "ASP.NET Core" };
    case "aws3":
      return { Icon: SiAmazons3, text: "AWS S3" };
    case "php":
      return { Icon: FaPhp, text: "PHP" };
    case "dexiejs":
      return { Icon: FaDatabase, text: "DexieJs" };
    case "postgresql":
      return { Icon: SiPostgresql, text: "PostgreSQL" };
    case "git":
      return { Icon: SiGit, text: "Git" };
    case "github":
      return { Icon: FaGithub, text: "Github" };
    case "expressjs":
      return { Icon: SiExpress, text: "ExpressJs" };
    case "mongodb":
      return { Icon: SiMongodb, text: "MongoDB" };
    case "fastapi":
      return { Icon: SiFastapi, text: "FastAPI" };
    case "sqlalchemy":
      return { Icon: SiSqlalchemy, text: "SQLAlchemy" };
    case "sqlite":
      return { Icon: SiSqlite, text: "SQLite" };
    case "jwt":
      return { Icon: SiJsonwebtokens, text: "JWT" };
    case "spring boot":
      return { Icon: SiSpringboot, text: "Spring Boot" };
    case "spring security":
      return { Icon: SiSpringsecurity, text: "Spring Security (JWT)" };
    case "maven":
      return { Icon: SiApachemaven, text: "Maven" };
    case "websockets":
      return { Icon: SiSocketdotio, text: "Web Sockets" };
    case "spring data jpa":
      return { Icon: SiHibernate, text: "Spring Data JPA" };
    case "ai/ml":
      return { Icon: LuBrainCircuit, text: "AI/ML" };
    default:
      break;
  }
};
