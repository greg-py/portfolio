import {
  faThreads,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";
import SocialIcon from "./SocialIcon";

const Social = () => {
  return (
    <Card>
      <h2 className="font-bold text-lg">Connect with me</h2>
      <div className="grid grid-cols-4 grid-rows-1 gap-4 pt-4">
        <SocialIcon href="mailto:gking8189@gmail.com" icon={faEnvelope} />
        <SocialIcon href="https://linkedin.com/in/npmigreg" icon={faLinkedin} />
        <SocialIcon href="https://threads.net/npmigreg" icon={faThreads} />
        <SocialIcon href="https://github.com/npmigreg" icon={faGithub} />
      </div>
    </Card>
  );
};

export default Social;
