const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full xl:w-2/3">
      {children}
    </div>
  );
};

export default Grid;
