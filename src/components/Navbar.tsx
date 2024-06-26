import logo from "../assets/logo.svg";
const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center h-10 text-white text-decoration-none bg-transparent pr-5">
      <div className="flex  items-center">
        <div className="relative flex items-center pl-4">
          <a href="#hero" className="text-black text-decoration-none">
            Home
          </a>
        </div>
        <div className="relative flex items-center pl-4">
          <a href="#shop" className="text-black text-decoration-none">
            Shop
          </a>
        </div>
        <div className="relative flex items-center pl-4">
          <a href="#contact" className="text-black text-decoration-none">
            Contact
          </a>
        </div>
        <div className="flex">
          <img
            src={logo}
            alt="portfolio_logo"
            className="w-20 object-contain pl-7 text-xl"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
