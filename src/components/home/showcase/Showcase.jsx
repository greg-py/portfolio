import Experience from "./Experience";
import Projects from "./Projects";

const Showcase = () => {
  return (
    <div className="flex flex-col space-y-8 lg:flex-row lg:justify-between lg:space-y-0 lg:space-x-8">
      <Experience />
      <Projects />
    </div>
  );
};

export default Showcase;
