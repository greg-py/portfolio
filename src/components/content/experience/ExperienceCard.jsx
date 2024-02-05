const ExperienceCard = (props) => {
  const { position } = props;

  return (
    <div>
      <h3 className="font-bold text-lg text-sky-300">{position.title}</h3>
      <div className="flex flex-row justify-between mb-4 text-gray-100">
        <h4>{position.location}</h4>
        <p>{position.time}</p>
      </div>
      <ul className="list-disc pl-4 space-y-2 text-sm">
        {position.responsibilities &&
          position.responsibilities.map((r) => {
            return <li>{r}</li>;
          })}
      </ul>
    </div>
  );
};

export default ExperienceCard;
