import EducationContainer from "./EducationContainer";
import { education } from "../../../data/education";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <EducationContainer>
      <h2 className="font-bold text-2xl text-gray-100">Education</h2>
      {education &&
        education.map((e, index) => {
          return <EducationCard key={index} education={e} />;
        })}
    </EducationContainer>
  );
};

export default Education;
