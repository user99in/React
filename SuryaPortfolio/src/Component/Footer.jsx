import { FaGithub, FaLinkedin, FaEnvelope  } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

        {/* LEFT – NAME & ROLE */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-800">
            Surya Bhanupandey
          </h3>
          <p className="text-sm text-gray-500">
            Full Stack Developer
          </p>
        </div>

        {/* CENTER – SOCIAL ICONS */}
        <div className="flex gap-6 text-gray-600 text-xl">
          <a
            href="https://github.com/Suryabhanupandey"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://in.linkedin.com/in/surya-bhanu-pandey-00664628b"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:suryabhanupandey08@gmail.com"
            className="hover:text-blue-500 transition"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* RIGHT – COPYRIGHT */}
        <p className="text-sm text-gray-500 text-center md:text-right">
          © {new Date().getFullYear()} Surya.dev. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
