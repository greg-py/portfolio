const Container = ({ children }) => {
  return (
    <main className="p-6 bg-gradient-to-r from-gray-950 to-gray-900 h-screen overflow-y-scroll text-gray-100 xl:p-12">
      {children}
    </main>
  );
};

export default Container;
