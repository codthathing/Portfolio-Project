import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import link_hack from "../assets/projects/link-hack.png";
import akinia from "../assets/projects/akinia.jpg";
import calor_stiches from "../assets/projects/calor-stiches.jpg";
import kin_website from "../assets/projects/kin-website.jpg";
import liveseg from "../assets/projects/liveseg.jpg";
import ProjectsPaginationButton from "../components/projects/ProjectsPaginationButton";
import ProjectsTemplate from "../components/projects/ProjectsTemplate";
import ProjectsPagination from "../components/projects/ProjectsPagination";
import { useRenderProjects } from "../hooks/useRenderProjects";

const ProjectsPage = () => {
  const featuredProjects = [
    {
      id: 0, project_image: calor_stiches, project_topic: "calor stiches", project_github: "calor-stiches.git", project_link: "calorstiches.vercel.app", project_text: "Calor stiches is an e-commerce clothing website where users can browse range of stiched clothing items, and users can add their products to cart with a seamless checkout process.", project_stack: [
        { id: 0, stack_name: "javascript" },
        { id: 1, stack_name: "css" },
        { id: 2, stack_name: "react" },
        { id: 3, stack_name: "localstorage" },
      ]
    },
    {
      id: 1, project_image: link_hack, project_topic: "link app", project_github: "link-app-hackathon.git", project_link: "link-hack.vercel.app", project_text: "Link app provides user with the ability to add links, visit the links, and also copy the links for sharing, making it simple and convenient to manage and share their information.", project_stack: [
        { id: 0, stack_name: "react" },
        { id: 1, stack_name: "tailwind css" },
        { id: 2, stack_name: "localstorage" },
        { id: 3, stack_name: "javascript" },
      ]
    },
    {
      id: 2, project_image: liveseg, project_topic: "liveseg football app", project_github: "liveseg.git", project_link: "liveseg.vercel.app", project_text: "This football streaming app is a platform that is built to provide football fans with live action of their favorite football teams and also provides additional features to enhance the fan experience.", project_stack: [
        { id: 0, stack_name: "html" },
        { id: 1, stack_name: "javascript" },
        { id: 2, stack_name: "bootstrap" },
      ]
    },
    {
      id: 3, project_image: akinia, project_topic: "akinia app", project_github: "Akinia-app.git", project_link: "akinia.vercel.app", project_text: "It is an e-commerce with sections for foods, clothes, and shoes, making it easy for users to shop and manage their purchases in one place. It also provides a cart that displays each product's subtotal and total cost for all items.", project_stack: [
        { id: 0, stack_name: "javascript" },
        { id: 1, stack_name: "react" },
        { id: 2, stack_name: "css" },
        { id: 3, stack_name: "localstorage" },
      ]
    },
    {
      id: 4, project_image: kin_website, project_topic: "kin website", project_github: "akinse-website.git", project_link: "webkin.netlify.app", project_text: "I built a website that offers services like UI/UX design, mobile and web app development, and product design. It also includes a customer review section for users to give feedbacks and experience about the quality of services provided.", project_stack: [
        { id: 0, stack_name: "html" },
        { id: 1, stack_name: "css" },
        { id: 2, stack_name: "javascript" },
        { id: 3, stack_name: "localstorage" },
      ]
    },
  ];
  const { changeProjectsShownPrev, currentIndex, newPaginationIndex, changeProjectsShownNext, paginationLength } = useRenderProjects(featuredProjects);

  return (
    <main className="main-center">
      <div className="relative w-11/12 lg:w-4/5">
        <section className="flex justify-between items-center">
          <ProjectsPaginationButton icon={faAngleLeft} buttonFunction={changeProjectsShownPrev} />
          {currentIndex && <ProjectsTemplate projectsArray={featuredProjects.slice(newPaginationIndex * currentIndex, ((newPaginationIndex * currentIndex) + currentIndex))} />}
          <ProjectsPaginationButton icon={faAngleRight} buttonFunction={changeProjectsShownNext} />
        </section>
        {paginationLength && <ProjectsPagination paginationArray={paginationLength} presentPagination={newPaginationIndex} />}
      </div>
    </main>
  );
};

export default ProjectsPage;