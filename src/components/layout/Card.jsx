const Card = ({ children }) => {
  return (
    <div className="relative m-6">
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg blur opacity-100"></div>
      <div className="relative p-8 bg-white rounded-lg leading-none flex flex-col space-y-8">
        {children}
      </div>
    </div>
  );
};

export default Card;
