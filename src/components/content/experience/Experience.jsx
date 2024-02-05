import ExperienceContainer from "./ExperienceContainer";
import { positions } from "../../../data/positions";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <ExperienceContainer>
      <h2 className="font-bold text-2xl text-gray-100">
        Professional Experience
      </h2>
      {positions &&
        positions.map((p, index) => {
          return <ExperienceCard key={index} position={p} />;
        })}
    </ExperienceContainer>
  );
};

export default Experience;
