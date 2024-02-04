const Button = ({ children }) => {
  return (
    <button className="p-4 bg-sky-300 rounded-lg max-w-md font-bold hover:bg-sky-400 hover:duration-100">
      {children}
    </button>
  );
};

export default Button;
