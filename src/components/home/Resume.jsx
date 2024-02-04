import Button from "../layout/Button";

const Resume = () => {
  return (
    <div className="flex flex-col space-y-4 md:items-center">
      <h2 className="font-bold text-lg">Download my resume</h2>
      <p>Access my professional resume in PDF format for your reference</p>
      <Button>Download</Button>
    </div>
  );
};

export default Resume;
