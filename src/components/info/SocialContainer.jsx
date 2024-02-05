const SocialContainer = ({ children }) => {
  return (
    <div className="flex flex-row space-x-3 text-gray-900 fixed bottom-3 rounded-full backdrop-blur-xl p-6 xl:backdrop-blur-none xl:p-0 xl:bottom-12">
      {children}
    </div>
  );
};

export default SocialContainer;
