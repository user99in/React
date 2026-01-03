import resume from "../assets/resume-surya.pdf";

function About() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE – TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate <strong>Computer Science student</strong> with a strong
            interest in building modern, scalable, and user-friendly
            web applications.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            As a <strong>Full-Stack Developer</strong>, I enjoy working with
            React on the frontend and Node.js with MongoDB on the backend.
            I love learning new technologies and improving my problem-solving skills.
          </p>

         
                      <a
                        href={resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                      >
                        Download Resume
                      </a>
        </div>

        {/* RIGHT SIDE – HIGHLIGHTS */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 border border-blue-500 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-600 mt-2">Projects Completed</p>
          </div>

          <div className="p-6 border border-blue-500 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-500">2+</h3>
            <p className="text-gray-600 mt-2">Internship / Training</p>
          </div>

          <div className="p-6 border border-blue-500 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-500">Full Stack</h3>
            <p className="text-gray-600 mt-2">Developer</p>
          </div>

          <div className="p-6 border border-blue-500 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold text-blue-500">2025</h3>
            <p className="text-gray-600 mt-2">Graduation</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;
