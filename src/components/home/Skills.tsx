import { skillsData } from "@/data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          My Skills
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-teal-500 to-cyan-500 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-teal-500">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-teal-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-linear-to-r from-teal-500 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
