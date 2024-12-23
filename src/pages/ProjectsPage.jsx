import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import link_hack from "../assets/projects/link-hack.png";
import ProjectsPaginationButton from "../components/projects/ProjectsPaginationButton";
import ProjectsTemplate from "../components/projects/ProjectsTemplate";
import ProjectsPagination from "../components/projects/ProjectsPagination";

const ProjectsPage = () => {
  const featuredProjects = [
    {id: 0, project_image: link_hack, project_topic: "link app", project_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis quidem voluptates, rem sequi, officia hic, nisi maiores quisquam totam explicabo tempora dolores laborum suscipit ipsum. Culpa consequuntur itaque iure.", project_stack: [
      {id: 0, stack_name: "tailwind css"},
      {id: 1, stack_name: "css"},
    ]},
    {id: 1, project_image: link_hack, project_topic: "link app", project_text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam veritatis quidem voluptates, rem sequi, officia hic, nisi maiores quisquam totam explicabo tempora dolores laborum suscipit ipsum. Culpa consequuntur itaque iure.", project_stack: [
      {id: 0, stack_name: "react"},
      {id: 1, stack_name: "localstorage"},
    ]},
  ];
  return (
    <main className="main-center">
      <div className="relative w-11/12 lg:w-4/5">
        <section className="flex justify-between items-center">
          <ProjectsPaginationButton icon={faAngleLeft} />
          <ProjectsTemplate projectsArray={featuredProjects} />
          <ProjectsPaginationButton icon={faAngleRight} />
        </section>
        <ProjectsPagination />
      </div>
    </main>
  );
};

export default ProjectsPage;