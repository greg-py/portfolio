import { jobs } from "../../../data/jobs";
import JobDescription from "./JobDescription";

const Experience = () => {
  return (
    <div className="flex flex-col lg:p-8 lg:w-1/2">
      <h2 className="font-bold text-2xl mb-4">Professional Experience</h2>
      <div className="flex flex-col space-y-8">
        {jobs &&
          jobs.map((j) => {
            return <JobDescription job={j} />;
          })}
      </div>
    </div>
  );
};

export default Experience;
