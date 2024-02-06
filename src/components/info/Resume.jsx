import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../../media/resume.pdf";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div className="inline-block flex flex-row items-center space-x-1">
      <FontAwesomeIcon className="w-4 h-4 text-gray-300" icon={faFilePdf} />
      <a
        className="text-sky-400"
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Résumé
      </a>
    </div>
  );
};

export default Resume;
