const Card = ({ children }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative p-8 bg-white rounded-lg leading-none">
        {children}
      </div>
    </div>
  );
};

export default Card;
