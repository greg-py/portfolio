import ContentContainer from "./ContentContainer";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";

const Content = () => {
  return (
    <ContentContainer>
      <Experience />
      <Projects />
    </ContentContainer>
  );
};

export default Content;
