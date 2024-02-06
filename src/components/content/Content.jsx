import ContentContainer from "./ContentContainer";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Education from "./education/Education";

const Content = () => {
  return (
    <ContentContainer>
      <Experience />
      <Projects />
      <Education />
    </ContentContainer>
  );
};

export default Content;
