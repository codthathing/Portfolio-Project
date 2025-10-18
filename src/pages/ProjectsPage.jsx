import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import link_hack from "../assets/projects/link-hack.png";
import calor_stiches from "../assets/projects/calor-stiches.png";
import liveseg from "../assets/projects/liveseg.png";
import music_player from "../assets/projects/music-player.png";
import PageMain from "../components/layout/PageMain";
import ProjectsPaginationButton from "../components/projects/ProjectsPaginationButton";
import ProjectsTemplate from "../components/projects/ProjectsTemplate";
import ProjectsPagination from "../components/projects/ProjectsPagination";
import { useRenderProjects } from "../hooks/useRenderProjects";

const ProjectsPage = () => {
  const [animation, setAnimation] = useState({ initial: "", exit: "" });

  const featuredProjects = [
    {
      id: 0,
      project_image: calor_stiches,
      project_topic: "calor stitches",
      project_github: "Calor-Stitches.git",
      project_link: "calor-stitches.vercel.app",
      project_text: "Calor stiches is an e-commerce clothing website where users can browse range of stiched clothing items, and users can add their products to cart with a seamless checkout process.",
      project_stack: [
        { id: 0, stack_name: "javascript" },
        { id: 1, stack_name: "css" },
        { id: 2, stack_name: "react" },
        { id: 3, stack_name: "localstorage" },
      ],
    },
    {
      id: 1,
      project_image: link_hack,
      project_topic: "link app",
      project_github: "Link-App.git",
      project_link: "kin-link-app.vercel.app",
      project_text: "Link app provides user with the ability to add links, visit the links, and also copy the links for sharing, making it simple and convenient to manage and share their information.",
      project_stack: [
        { id: 0, stack_name: "react" },
        { id: 1, stack_name: "tailwind css" },
        { id: 2, stack_name: "supabase" },
        { id: 3, stack_name: "javascript" },
      ],
    },
    {
      id: 2,
      project_image: liveseg,
      project_topic: "liveseg football app",
      project_github: "Liveseg.git",
      project_link: "liveseg.vercel.app",
      project_text: "This football streaming app is a platform that is built to provide football fans with live action of their favorite football teams and also provides additional features to enhance the fan experience.",
      project_stack: [
        { id: 0, stack_name: "html" },
        { id: 1, stack_name: "javascript" },
        { id: 2, stack_name: "bootstrap" },
      ],
    },
    // {
    //   id: 3, project_image: akinia, project_topic: "Akin Shop", project_github: "Akin-Shop.git", project_link: "akin-shop.vercel.app", project_text: "It is an e-commerce with sections for foods, clothes, and shoes, making it easy for users to shop and manage their purchases in one place. It also provides a cart that displays each product's subtotal and total cost for all items.", project_stack: [
    //     { id: 0, stack_name: "javascript" },
    //     { id: 1, stack_name: "react" },
    //     { id: 2, stack_name: "css" },
    //     { id: 3, stack_name: "localstorage" },
    //   ]
    // },
    // {
    //   id: 4, project_image: kin_website, project_topic: "kin website", project_github: "Kin-Website.git", project_link: "webkin.netlify.app", project_text: "I built a website that offers services like UI/UX design, mobile and web app development, and product design. It also includes a customer review section for users to give feedbacks and experience about the quality of services provided.", project_stack: [
    //     { id: 0, stack_name: "html" },
    //     { id: 1, stack_name: "css" },
    //     { id: 2, stack_name: "javascript" },
    //     { id: 3, stack_name: "localstorage" },
    //   ]
    // },
    {
      id: 3,
      project_image: music_player,
      project_topic: "akin music",
      project_github: "Music-Player.git",
      project_link: "kin-music-player.vercel.app",
      project_text: "This is is a ad-free music streaming platform, which users the opportunity to listen to a specified amount of music without any interruption, it provides them with some other features such as Play/Pause, Forward/Backward e.t.c",
      project_stack: [
        { id: 1, stack_name: "css" },
        { id: 2, stack_name: "javascript" },
        { id: 3, stack_name: "react" },
      ],
    },
  ];
  const { changeProjectsShownPrev, currentIndex, newPaginationIndex, changeProjectsShownNext, paginationLength } = useRenderProjects(featuredProjects, setAnimation);

  return (
    <PageMain className={"main-center"}>
      <div className="relative w-11/12 lg:w-4/5">
        <section className="flex justify-between items-center">
          <ProjectsPaginationButton Icon={FaAngleLeft} buttonFunction={changeProjectsShownPrev} />
          <div className="overflow-hidden w-[77.5%] md:w-4/5 lg:w-10/12">{currentIndex && <ProjectsTemplate keyId={newPaginationIndex} animation={animation} projectsArray={featuredProjects.slice(newPaginationIndex * currentIndex, newPaginationIndex * currentIndex + currentIndex)} />}</div>
          <ProjectsPaginationButton Icon={FaAngleRight} buttonFunction={changeProjectsShownNext} />
        </section>
        {paginationLength && <ProjectsPagination paginationArray={paginationLength} presentPagination={newPaginationIndex} />}
      </div>
    </PageMain>
  );
};

export default ProjectsPage;
