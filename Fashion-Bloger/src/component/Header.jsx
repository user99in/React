import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
        
        {/* Logo */}
        <h1 className="text-white text-xl font-semibold">
          MCKENZIE
          <span className="block text-sm font-normal tracking-wide">
            FASHION BLOG
          </span>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 items-center text-white font-medium">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <NavLink
            to="/contact"
            className="ml-4 px-5 py-2 bg-pink-500 rounded hover:bg-pink-600 transition"
          >
            Contact Me
          </NavLink>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
