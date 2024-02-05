import profilePicture from "../../media/profile-picture.png";

const TitleCard = () => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="w-32 h-32">
        <img src={profilePicture} alt="Greg King" className="rounded-full" />
      </div>
      <div>
        <h1 className="font-bold text-3xl text-gray-100">Greg King</h1>
        <h2 className="text-lg text-gray-300">Full Stack Software Developer</h2>
        <p className="text-md text-gray-400">Pittsburgh, PA</p>
      </div>
    </div>
  );
};

export default TitleCard;
