import SkillsContainer from "./SkillsContainer";
import SkillsTable from "./SkillsTable";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsTable skills={skills} />
    </SkillsContainer>
  );
};

export default Skills;
