import Card from "./Card";
import profilePicture from "../../media/profile-picture.png";

const Introduction = () => {
  return (
    <Card>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-row space-x-4 items-center">
          <div className="w-12 h-12">
            <img
              src={profilePicture}
              alt="Greg King"
              className="rounded-full"
            />
          </div>
          <div>
            <h4 className="font-bold text-md">Greg King</h4>
            <h5 className="font-bold text-sm">Full Stack Software Developer</h5>
          </div>
        </div>
        <p className="text-sm">
          I'm a Full Stack Software Developer with expertise in React, Node.js,
          PostgreSQL, and AWS.
        </p>
        <p className="text-sm">
          I'm currently open to new opportunities, so feel free to reach out!
        </p>
      </div>
    </Card>
  );
};

export default Introduction;
