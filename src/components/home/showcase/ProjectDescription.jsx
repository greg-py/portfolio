import Button from "../../layout/Button";

const ProjectDescription = (props) => {
  const { project } = props;

  return (
    <div>
      <h3 className="font-bold text-lg text-sky-400">{project.title}</h3>
      <div className="mb-4">
        <h4>{project.location}</h4>
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
        {project.link && (
          <div className="mt-4">
            <Button>{project.linkText}</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDescription;
