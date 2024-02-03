const Container = ({ children }) => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col justify-center overflow-hidden">
      {children}
    </main>
  );
};

export default Container;
