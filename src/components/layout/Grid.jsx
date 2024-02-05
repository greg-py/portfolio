const Grid = ({ children }) => {
  return (
    <div className="w-full flex flex-row justify-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 w-full xl:w-3/4">
        {children}
      </div>
    </div>
  );
};

export default Grid;
