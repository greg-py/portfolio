const ExperienceCard = (props) => {
  const { position } = props;

  return (
    <div>
      <h3 className="font-bold text-lg text-sky-300">{position.title}</h3>
      <div className="flex flex-row justify-between mb-3 text-gray-100">
        <h4>{position.location}</h4>
        <p>{position.time}</p>
      </div>
      <p className="text-sm">{position.text}</p>
    </div>
  );
};

export default ExperienceCard;
