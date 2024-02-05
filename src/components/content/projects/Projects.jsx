import ProjectsContainer from "./ProjectsContainer";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2 className="font-bold text-2xl text-gray-100">Projects</h2>
      {projects &&
        projects.map((p) => {
          return <ProjectCard project={p} />;
        })}
    </ProjectsContainer>
  );
};

export default Projects;
