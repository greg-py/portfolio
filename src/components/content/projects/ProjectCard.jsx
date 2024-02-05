const ProjectCard = (props) => {
  const { project } = props;

  return (
    <div>
      <h3 className="font-bold text-lg text-sky-300">{project.title}</h3>
      <div className="flex flex-row justify-between mb-4 text-gray-100">
        <h4>{project.location}</h4>
        <p>{project.time}</p>
      </div>
      <ul className="list-disc pl-4 space-y-2 text-sm">
        {project.accomplishments &&
          project.accomplishments.map((r) => {
            return <li>{r}</li>;
          })}
      </ul>
      <div className="mt-4 text-sm">
        <p>
          <span className="font-bold">Skills Demonstrated:</span>{" "}
          {project && project.skills?.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
