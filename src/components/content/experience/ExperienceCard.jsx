import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const ExperienceCard = (props) => {
  const { position } = props;

  return (
    <a
      href={position.href}
      target="_blank"
      rel="noreferrer"
      className={`p-6 rounded-lg ${
        position.href ? "hover:bg-gray-800 hover:cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-bold text-lg text-sky-400">{position.title}</h3>
        {position.href && <FontAwesomeIcon icon={faSquareArrowUpRight} />}
      </div>
      <div className="flex flex-row justify-between mb-3 text-gray-100">
        <h4>{position.location}</h4>
        <p>{position.time}</p>
      </div>
      <p className="text-sm">{position.text}</p>
    </a>
  );
};

export default ExperienceCard;
