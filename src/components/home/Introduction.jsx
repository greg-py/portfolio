import profilePicture from "../../media/profile-picture.png";

const Introduction = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row space-x-4 items-center">
        <div className="w-12 h-12">
          <img src={profilePicture} alt="Greg King" className="rounded-full" />
        </div>
        <div>
          <h2 className="font-bold text-xl">Greg King</h2>
          <h3 className="text-md">Full Stack Software Developer</h3>
        </div>
      </div>
      <div>
        <p className="text-sm">
          I'm a Full Stack Software Developer with expertise in React, Node.js,
          PostgreSQL, and AWS.
        </p>
        <p className="text-sm">
          I'm currently open to new opportunities, so feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default Introduction;
