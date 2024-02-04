import Introduction from "./Introduction";
import Social from "./Social";

const Header = () => {
  return (
    <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
      <Introduction />
      <Social />
    </div>
  );
};

export default Header;
