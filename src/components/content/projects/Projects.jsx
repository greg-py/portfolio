import ProjectsContainer from "./ProjectsContainer";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import Button from "../../layout/Button";
import { contentSections } from "../../../lib/constants";

const Projects = (props) => {
  const { modalSectionHandler, openModalHandler } = props;

  const showProjectsModal = () => {
    modalSectionHandler(contentSections.PROJECTS);
    openModalHandler(true);
  };

  return (
    <ProjectsContainer>
      <div className="flex flex-row justify-between">
        <h2 className="font-bold text-2xl text-gray-100">Projects</h2>
        <Button onClick={showProjectsModal}>View All</Button>
      </div>
      {projects &&
        projects.map((p, index) => {
          return <ProjectCard key={index} project={p} />;
        })}
    </ProjectsContainer>
  );
};

export default Projects;
