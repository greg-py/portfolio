const InfoContainer = ({ children }) => {
  return (
    <div className="flex flex-col space-y-6 text-gray-400 lg:sticky lg:top-0 lg:w-1/2">
      {children}
    </div>
  );
};

export default InfoContainer;
