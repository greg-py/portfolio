const Button = ({ children }) => {
  return (
    <button className="p-4 bg-gray-100 border border-gray-200 rounded-lg max-w-md font-bold hover:bg-gray-200 hover:duration-100">
      {children}
    </button>
  );
};

export default Button;
