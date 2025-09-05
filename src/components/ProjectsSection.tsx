import React, { useState } from "react";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  demoLink: string;
  githubLink: string;
}

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      title: "SensAI-AI based career coach",
      description:
        "Platform with ATS-friendly resume checks, interview prep, job insights, and personalized growth tracking.",
      stack: [
        "Neon DB",
        "Prisma",
        "Next JS",
        "Inngest",
        "Shadcn UI",
        "Gemini API",
      ],
      image: "/Proxima.png",
      demoLink: "https://sens-ai-beige.vercel.app/",
      githubLink: "https://github.com/Shreya-Chaturvedi/SensAI",
    },
    {
      title: "Alumni-Student Interconnect",
      description:
        "Platform for mentorship, career guidance, secure forum and events",
      stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "/Alumni_S_I.png",
      demoLink: "https://alumni-student-connect-eight.vercel.app/",
      githubLink: "https://github.com/Shreya-Chaturvedi/Alumni-Student-Connect",
    },
    {
      title: "Resume-Vista",
      description: "AI-powered resume screening and ranking system using NLP",
      stack: ["Python", "Streamlit", "NLP", "HTML", "CSS"],
      image: "/ResumeVista.png",
      demoLink: "https://resumevista.streamlit.app/",
      githubLink:
        "https://github.com/Shreya-Chaturvedi/AI-Resume-Screening-and-Ranking-System",
    },
    {
      title: "Stay-Inn (Airbnb Clone)",
      description:
        "Dynamic property listing, booking, reviews and ratings, filters, user authentication, spam analysis",
      stack: ["EJS", "MongoDB", "Express.js", "Node.js", "AI Integration"],
      image: "/stayInn.png",
      demoLink: "https://stayinn-0qqa.onrender.com/listings",
      githubLink: "https://github.com/Shreya-Chaturvedi/StayInn",
    },
    {
      title: "Student Admission Management System",
      description: "Admin panel with inquiry and communication dashboard",
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: "/Student_Mgmt.png",
      demoLink: "https://github.com/Shreya-Chaturvedi/Admission_Management",
      githubLink: "https://github.com/Shreya-Chaturvedi/Admission_Management",
    },

    {
      title: "Recipe Generator",
      description:
        "Smart recipe platform that adapts to preferences, ingredients, and reduces waste.",
      stack: ["HTML", "CSS", "Javascript"],
      image: "/RecipeApp.png",
      demoLink: "https://github.com/Shreya-Chaturvedi/Recipe_Generator",
      githubLink: "https://github.com/Shreya-Chaturvedi/Recipe_Generator",
    },
    {
      title: "Spotify Clone",
      description: "Music streaming platform clone with playlist management",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/Spotify.png",
      demoLink: "https://shreya-chaturvedi.github.io/Spotify_Clone/",
      githubLink: "https://github.com/Shreya-Chaturvedi/Spotify_Clone",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Classic game with modern interface and multiplayer capabilities",
      stack: ["HTML", "CSS", "JavaScript"],
      image: "/TicTacToe.png",
      demoLink: "https://shreya-chaturvedi.github.io/Tic-Tac-Toe/",
      githubLink: "https://github.com/Shreya-Chaturvedi/Tic-Tac-Toe",
    },
  ];

  const filterOptions = ["All", "React", "Next", "Node.js", "Python", "HTML"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          project.stack.some((tech) =>
            tech.toLowerCase().includes(activeFilter.toLowerCase())
          )
        );

  return (
    <section id="projects" className="py-24 bg-[#121212]">
      <div className="section-padding">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-soft-blue mr-4"></div>
            <p className="text-soft-blue font-medium uppercase tracking-wide">
              My Work
            </p>
            <div className="w-12 h-0.5 bg-soft-blue ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Here are some of the projects I've worked on, showcasing my
            technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {filterOptions.map((filter, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-soft-blue text-white"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="reveal backdrop-blur-sm bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-soft-blue/30 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-80"></div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl font-poppins text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap mb-4">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-gray-300 rounded-full px-2 py-0.5 text-xs m-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-soft-blue hover:text-white transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-soft-blue hover:text-white transition-colors text-sm font-medium"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
