import {
  faGithub,
  faLinkedin,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import SocialContainer from "./SocialContainer";
import SocialCard from "./SocialCard";

const Socials = () => {
  const socials = [
    {
      href: "mailto:gking8189@gmail.com",
      icon: faEnvelope,
    },
    {
      href: "https://linkedin.com/in/npmigreg",
      icon: faLinkedin,
    },
    {
      href: "https://github.com/npmigreg",
      icon: faGithub,
    },
    {
      href: "https://threads.net/npmigreg",
      icon: faThreads,
    },
  ];

  return (
    <SocialContainer>
      {socials &&
        socials.map((s) => {
          return <SocialCard href={s.href} icon={s.icon} />;
        })}
    </SocialContainer>
  );
};

export default Socials;
