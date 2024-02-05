import ProjectLabel from "./ProjectLabel";

const ProjectCard = (props) => {
  const { project } = props;

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="p-6 rounded-lg hover:bg-gray-800 hover:cursor-pointer"
    >
      <h3 className="font-bold text-lg text-sky-300">{project.title}</h3>
      <div className="flex flex-row justify-between mb-4 text-gray-100">
        <h4>{project.location}</h4>
        <p>{project.time}</p>
      </div>
      <p className="text-sm">{project.text}</p>
      <div className="mt-2 text-xs text-gray-100">
        {project &&
          project.skills?.map((s) => {
            return <ProjectLabel label={s} />;
          })}
      </div>
    </a>
  );
};

export default ProjectCard;
