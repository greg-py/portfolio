import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EducationCard = (props) => {
  const { education } = props;

  return (
    <a
      href={education.href}
      target="_blank"
      rel="noreferrer"
      className={`p-6 rounded-lg ${
        education.href ? "hover:bg-gray-800 hover:cursor-pointer" : ""
      }`}
    >
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-bold text-lg text-sky-400">{education.title}</h3>
        {education.href && <FontAwesomeIcon icon={faSquareArrowUpRight} />}
      </div>
      <div className="flex flex-row justify-between mb-3 text-gray-100">
        <h4>{education.location}</h4>
        <p>{education.time}</p>
      </div>
      <p className="text-sm">{education.text}</p>
    </a>
  );
};

export default EducationCard;
