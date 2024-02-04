const JobDescription = (props) => {
  const { job } = props;

  return (
    <div>
      <h3 className="font-bold text-lg text-sky-400">{job.title}</h3>
      <div className="flex flex-row justify-between mb-4">
        <h4>{job.location}</h4>
        <p>{job.time}</p>
      </div>
      <ul className="list-disc pl-4 space-y-2 text-sm">
        {job.responsibilities &&
          job.responsibilities.map((r) => {
            return <li>{r}</li>;
          })}
      </ul>
    </div>
  );
};

export default JobDescription;
