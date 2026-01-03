function Education() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-500">Education</span>
        </h2>

        {/* EDUCATION CARD */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition max-w-3xl mx-auto">

          <h3 className="text-2xl font-semibold mb-2">
            Bachelor of Computer Application (B.C.A)
          </h3>

          <p className="text-blue-500 font-medium">
            Computer Science & Engineering
          </p>

          <p className="text-gray-500 text-sm mt-1 mb-4">
            2022 – 2025
          </p>

          <p className="text-gray-600 leading-relaxed">
           I have successfully completed my Bachelor’s degree in Computer Science, gaining solid knowledge in software development, data structures, algorithms, and modern full-stack technologies.
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;
