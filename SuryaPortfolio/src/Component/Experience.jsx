function Experience() {
  return (
    <section className="px-6 md:px-20 py-20 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Experience
        </h2>

        {/* ONE ROW */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* COMPANY 1 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Frontend Developer Intern
            </h3>

            <div className="flex justify-between text-sm mt-1">
              <span className="text-blue-500 font-medium">CodeAlpha</span>
              <span className="text-gray-500">June 2025 – August 2025</span>
            </div>

            <ul className="mt-4 text-gray-600 space-y-2 text-sm">
              <li>• Built React UI components</li>
              <li>• Integrated REST APIs</li>
              <li>• Improved UI performance</li>
            </ul>
          </div>

          {/* COMPANY 2 */}
          <div className="border p-6 rounded-lg">
            <h3 className="text-xl font-semibold">
              Frontend Developer Intern
            </h3>

            <div className="flex justify-between text-sm mt-1">
              <span className="text-blue-500 font-medium">Cognifyz Technologies</span>
              <span className="text-gray-500">August 2025 – October 2025</span>
            </div>

            <ul className="mt-4 text-gray-600 space-y-2 text-sm">
              <li>• Developed responsive layouts</li>
              <li>• Used Tailwind CSS</li>
              <li>• Collaborated using GitHub</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
