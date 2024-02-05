import profilePicture from "../../media/profile-picture.png";

const TitleCard = () => {
  return (
    <div className="flex flex-row space-x-4 items-center">
      <div className="w-20 h-20 xl:w-32 xl:h-32">
        <img src={profilePicture} alt="Greg King" className="rounded-full" />
      </div>
      <div>
        <h1 className="font-bold text-2xl text-gray-100 xl:text-3xl">
          Greg King
        </h1>
        <h2 className="text-md text-gray-300 xl:text-lg">
          Full Stack Software Developer
        </h2>
        <p className="text-sm text-gray-400 xl:text-md">Pittsburgh, PA</p>
      </div>
    </div>
  );
};

export default TitleCard;
