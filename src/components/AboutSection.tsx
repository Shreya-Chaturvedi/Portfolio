import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-[#121212]">
      <div className="section-padding relative">
        <div className="shape-circle bottom-left opacity-30"></div>

        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-soft-blue mr-4"></div>
            <p className="text-soft-blue font-medium uppercase tracking-wide">
              About Me
            </p>
            <div className="w-12 h-0.5 bg-soft-blue ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Aspiring Software Developer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          <div className="reveal">
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Aspire to utilize my software development skills in creating
              innovative solutions and continuous enhancements.{" "}
              <ul>
                <li>Aiming to collaborate with dynamic teams.</li>
                <li>
                  To write user-friendly code that aligns with company
                  standards.
                </li>
                <li>
                  Efforts that exceeds customer expectations, and enhances user
                  satisfaction.
                </li>
                <li>Ultimately contributing to the society.</li>
              </ul>
            </p>

            <div className="mt-8">
              <a
                href="https://drive.google.com/file/d/1gQ8JidhA-bdSzB_gdD07zpZcClDYH8dZ/view?usp=sharing"
                className="inline-flex items-center bg-soft-blue/20 border border-soft-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-soft-blue/30 transition-all"
              >
                Download Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-navy/50 p-6 rounded-lg backdrop-blur-sm border border-gray-800">
              <h4 className="font-bold text-white mb-1 text-lg">Internship</h4>
              <div className="pl-4 border-l-2 border-soft-blue/70">
                <p className="font-medium text-white">
                  AICTE Internship on AI: Transformative Learning with
                  TechSaksham
                </p>
                <p className="text-gray-400">Microsoft & SAP CSR initiative</p>
                <p className="text-gray-400">February 2025 - March 2025</p>
              </div>
              <h4 className="font-bold text-white mt-6 mb-1 text-lg">
                Educational Background
              </h4>
              <div className="mb-6 pl-4 border-l-2 border-soft-blue/70">
                <p className="font-medium text-white">
                  B.Tech in Computer Science and Engineering
                </p>
                <p className="text-gray-400">
                  Acropolis Institute of Technology and Research, Indore
                </p>
                <p className="text-gray-400">2022–2026</p>
              </div>
              <div className="mb-6 pl-4 border-l-2 border-soft-blue/70">
                <p className="font-medium text-white">
                  Senior Secondary Education
                </p>
                <p className="text-gray-400">National Public School, Indore</p>
                <p className="text-gray-400">2022</p>
              </div>
              <div className="pl-4 border-l-2 border-soft-blue/70">
                <p className="font-medium text-white">
                  Higher Secondary Education
                </p>
                <p className="text-gray-400">National Public School, Indore</p>
                <p className="text-gray-400">2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
