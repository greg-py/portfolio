import { projects } from "../../../data/projects";
import ProjectDescription from "./ProjectDescription";

const Projects = () => {
  return (
    <div className="flex flex-col lg:p-8 lg:w-1/2">
      <h2 className="font-bold text-2xl mb-4">Projects</h2>
      <div className="flex flex-col space-y-8">
        {projects &&
          projects.map((p) => {
            return <ProjectDescription project={p} />;
          })}
      </div>
    </div>
  );
};

export default Projects;
