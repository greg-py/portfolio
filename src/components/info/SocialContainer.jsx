const SocialContainer = ({ children }) => {
  return (
    <div className="flex flex-row space-x-4 text-gray-900 fixed bottom-12">
      {children}
    </div>
  );
};

export default SocialContainer;
