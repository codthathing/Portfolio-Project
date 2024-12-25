import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import link_hack from "../assets/projects/link-hack.png";
import ProjectsPaginationButton from "../components/projects/ProjectsPaginationButton";
import ProjectsTemplate from "../components/projects/ProjectsTemplate";
import ProjectsPagination from "../components/projects/ProjectsPagination";
import { useRenderProjects } from "../hooks/useRenderProjects";

const ProjectsPage = () => {
  const featuredProjects = [
    {
      id: 0, project_image: link_hack, project_topic: "link app", project_github: "https://", project_link: "https://link-hack.vercel.app", project_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis quidem voluptates, rem sequi, officia hic, nisi maiores quisquam totam explicabo tempora dolores laborum suscipit ipsum. Culpa consequuntur itaque iure.", project_stack: [
        { id: 0, stack_name: "tailwind css" },
        { id: 1, stack_name: "css" },
      ]
    },
    {
      id: 1, project_image: link_hack, project_topic: "link app", project_github: "https://", project_link: "https://link-hack.vercel.app", project_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis quidem voluptates, rem sequi, officia hic, nisi maiores quisquam totam explicabo tempora dolores laborum suscipit ipsum. Culpa consequuntur itaque iure.", project_stack: [
        { id: 0, stack_name: "react" },
        { id: 1, stack_name: "localstorage" },
      ]
    },
    {
      id: 2, project_image: link_hack, project_topic: "link app", project_github: "https://", project_link: "https://link-hack.vercel.app", project_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis quidem voluptates, rem sequi, officia hic, nisi maiores quisquam totam explicabo tempora dolores laborum suscipit ipsum. Culpa consequuntur itaque iure.", project_stack: [
        { id: 0, stack_name: "html" },
        { id: 1, stack_name: "java" },
      ]
    },
    {
      id: 3, project_image: link_hack, project_topic: "link app", project_github: "https://", project_link: "https://link-hack.vercel.app", project_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis quidem voluptates, rem sequi, officia hic, nisi maiores quisquam totam explicabo tempora dolores laborum suscipit ipsum. Culpa consequuntur itaque iure.", project_stack: [
        { id: 0, stack_name: "html" },
        { id: 1, stack_name: "java" },
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
        {paginationLength && <ProjectsPagination paginationArray={paginationLength} presentPagination={newPaginationIndex} /> }
      </div>
    </main>
  );
};

export default ProjectsPage;