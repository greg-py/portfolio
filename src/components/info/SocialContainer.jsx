const SocialContainer = ({ children }) => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 w-1/2 text-gray-900">
      {children}
    </div>
  );
};

export default SocialContainer;
