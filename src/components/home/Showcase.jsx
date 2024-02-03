const Showcase = () => {
  return (
    <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0 md:space-x-8">
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg border border-gray-200 md:w-1/2">
        <h2 className="font-bold text-2xl">Professional Experience</h2>
        <div className="pt-4">
          <h3>Software Engineer II at XSOLIS</h3>
          <p>2022 - Current</p>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 p-4 rounded-lg border border-gray-200 md:w-1/2">
        <h2 className="font-bold text-2xl">Projects</h2>
        <div className="pt-4">
          <h3>Apache Kafka Consumer Service</h3>
          <p>XSOLIS</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
