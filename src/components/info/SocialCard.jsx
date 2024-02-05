import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialCard = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-full flex justify-center items-center hover:bg-gray-300 hover:duration-100">
        <FontAwesomeIcon className="w-6 h-6" icon={props.icon} />
      </div>
    </a>
  );
};

export default SocialCard;
