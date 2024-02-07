const Container = ({ children }) => {
  return (
    <div className="container mx-auto p-6 h-screen overflow-y-scroll scrollbar-hide text-gray-100 flex flex-col space-y-12 lg:p-12 lg:space-y-0 lg:flex-row lg:space-x-12">
      {children}
    </div>
  );
};

export default Container;
