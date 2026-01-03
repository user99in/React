function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-blue-500">
          Surya<span className="text-black">.dev</span>
        </h1>

        {/* NAV LINKS */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-500 cursor-pointer"><a href="./Home.jsx" className="">Home</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="./About.jsx">About</a></li>
          <li className="hover:text-blue-500 cursor-pointer"><a href="./Skills.jsx">Skills</a></li>
          <li className="hover:text-blue-500 cursor-pointer">Projects</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* CTA BUTTON */}
        <a
          href="#contact"
          className="hidden md:inline-block px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
