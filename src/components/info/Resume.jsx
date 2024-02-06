import resume from "../../media/resume.pdf";

const Resume = () => {
  return (
    <a
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
      className="py-2 px-3 text-xs uppercase bg-sky-400 text-gray-100 font-bold rounded-lg max-w-28 hover:bg-sky-500 hover:duration-100"
    >
      View Résumé
    </a>
  );
};

export default Resume;
