const Grid = ({ children }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full xl:w-3/4">
      {children}
    </div>
  );
};

export default Grid;
