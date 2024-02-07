import ContentContainer from "./ContentContainer";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Education from "./education/Education";
import Footer from "../layout/Footer";

const Content = () => {
  return (
    <ContentContainer>
      <Experience />
      <Projects />
      <Education />
      <Footer />
    </ContentContainer>
  );
};

export default Content;
