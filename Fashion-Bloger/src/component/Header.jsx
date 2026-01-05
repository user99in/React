import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-6 py-4 sm:py-5">
        
        {/* Logo */}
        <h1 className="text-white text-lg sm:text-xl font-semibold">
          MCKENZIE
          <span className="block text-xs sm:text-sm font-normal tracking-wide">
            FASHION BLOG
          </span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex flex-wrap gap-4 sm:gap-6 lg:gap-8 items-center text-white font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink
            to="/contact"
            className="ml-2 sm:ml-4 px-3 sm:px-5 py-1.5 sm:py-2 bg-pink-500 rounded hover:bg-pink-600 transition text-sm sm:text-base"
          >
            Contact Me
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
