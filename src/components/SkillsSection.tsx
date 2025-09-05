import React from "react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C/C++", "HTML", "CSS", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Vite",
        "Express.js",
        "Node.js",
      ],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Other Tools",
      skills: ["Streamlit", "EJS", "PHP", "Git", "Github"],
    },
  ];

  const currentlyLearning = ["Next.js", "AI Integration"];

  return (
    <section id="skills" className="py-24 bg-navy">
      <div className="section-padding relative">
        <div className="shape-circle top-right opacity-30"></div>

        <div className="flex flex-col items-center text-center mb-16 relative z-10">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-soft-blue mr-4"></div>
            <p className="text-soft-blue font-medium uppercase tracking-wide">
              My Expertise
            </p>
            <div className="w-12 h-0.5 bg-soft-blue ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-6 hover:border-soft-blue/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold font-poppins text-white mb-4">
                {category.title}
              </h3>
              <div className="w-12 h-0.5 bg-soft-blue mb-6"></div>
              <div className="flex flex-wrap">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-white rounded-full px-3 py-1 text-sm font-medium m-1 transition-all hover:bg-soft-blue"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 reveal relative z-10">
          <div className="bg-gradient-to-r from-soft-blue/20 to-soft-blue/5 p-8 rounded-lg backdrop-blur-sm border border-soft-blue/30">
            <h3 className="text-2xl font-bold font-poppins mb-4 text-white">
              Currently Working On
            </h3>
            <div className="w-16 h-0.5 bg-white/50 mb-6"></div>
            <div className="flex flex-wrap">
              {currentlyLearning.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white/20 text-white rounded-full px-3 py-1 text-sm font-medium m-1 transition-all hover:bg-white/30"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-4 text-gray-300">
              Focusing on building full-stack applications with MERN stack and
              AI.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
