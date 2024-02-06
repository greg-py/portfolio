import InfoContainer from "./InfoContainer";
import TitleCard from "./TitleCard";
import Description from "./Description";
import Socials from "./Socials";
import Resume from "./Resume";
import Skills from "./Skills";

const Info = () => {
  return (
    <InfoContainer>
      <TitleCard />
      <Description />
      <Skills />
      <Resume />
      <Socials />
    </InfoContainer>
  );
};

export default Info;
