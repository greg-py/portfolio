const Container = ({ children }) => {
  return (
    <main className="p-12 bg-gradient-to-r from-gray-950 to-gray-900 h-screen overflow-y-scroll text-gray-100 flex flex-row justify-center">
      {children}
    </main>
  );
};

export default Container;
