import { skills } from "../data/skills";

function Skills() {
  return (
    <section className="px-6 md:px-20 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-4 capitalize text-blue-500">
                {category}
              </h3>

              <ul className="space-y-2 text-gray-700">
                {items.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
