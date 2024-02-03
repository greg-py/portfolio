import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcon = (props) => {
  return (
    <a className="mx-auto" href={props.href} target="_blank" rel="noreferrer">
      <div className="w-12 h-12 bg-gray-100 border border-gray-200 rounded-lg flex justify-center items-center">
        <FontAwesomeIcon className="w-6 h-6" icon={props.icon} />
      </div>
    </a>
  );
};

export default SocialIcon;
