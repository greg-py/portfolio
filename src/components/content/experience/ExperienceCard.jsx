const ExperienceCard = (props) => {
  const { position } = props;

  return (
    <a
      href={position.href}
      target="_blank"
      rel="noreferrer"
      className="p-6 rounded-lg hover:bg-gray-800 hover:cursor-pointer"
    >
      <h3 className="font-bold text-lg text-sky-400">{position.title}</h3>
      <div className="flex flex-row justify-between mb-3 text-gray-100">
        <h4>{position.location}</h4>
        <p>{position.time}</p>
      </div>
      <p className="text-sm">{position.text}</p>
    </a>
  );
};

export default ExperienceCard;
