import Card from "./Card";

const Resume = () => {
  return (
    <Card>
      <div className="text-center flex flex-col space-y-4">
        <h2 className="font-bold text-lg">Download my resume</h2>
        <p>Access my professional resume in PDF format for your reference</p>
        <button>Download</button>
      </div>
    </Card>
  );
};

export default Resume;
