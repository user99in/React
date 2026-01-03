import img from "../assets/content.png";
import resume from "../assets/resume-surya.pdf";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center w-full">
        {/* LEFT SIDE – TEXT */}
        <div>
          <p className="text-blue-500 uppercase tracking-widest mb-3">
            Full Stack Developer
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hi, I'm <span className="text-blue-500">Surya</span>
            <br />I build modern web apps
          </h1>

          <p className="mt-5 text-gray-600 max-w-lg">
            Computer Science student passionate about building scalable,
            user-friendly full-stack web applications using React, Node.js, and
            MongoDB.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
             
              <a
                href="https://github.com/user99in"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition inline-block"
              >
                View Projects
              </a>
             

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition inline-block"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* RIGHT SIDE – IMAGE */}
        <div className="flex justify-center">
          <img
            src={img}
            alt="Developer Illustration"
            className="w-72 md:w-96 rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
