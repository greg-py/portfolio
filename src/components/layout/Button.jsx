const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="py-1 px-2 bg-sky-400 font-bold text-gray-100 rounded-lg hover:bg-sky-500 hover:transition-100"
    >
      {props.children}
    </button>
  );
};

export default Button;
