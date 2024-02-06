const SocialContainer = ({ children }) => {
  return (
    <div className="flex flex-row space-x-3 text-gray-800 rounded-full lg:fixed lg:p-0 lg:bottom-12">
      {children}
    </div>
  );
};

export default SocialContainer;
