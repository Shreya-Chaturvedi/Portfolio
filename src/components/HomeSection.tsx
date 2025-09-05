import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HomeSection = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Software Developer",
    "Frontend Developer",
    "Web Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Adjust speed
      setTypingSpeed(isDeleting ? 60 : 120);

      // If finished typing
      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
      }
      // If finished deleting
      else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-16 bg-navy overflow-hidden"
    >
      {/* Decorative shapes */}
      <div className="shape-circle top-right"></div>
      <div className="shape-circle bottom-left"></div>

      <div className="grid md:grid-cols-2 w-full">
        {/* Left image section */}
        <div
          className={`flex items-center justify-center h-full py-12 relative transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-soft-blue shadow-lg hover:scale-105 transition-transform duration-300">
            <AvatarImage src="./assets/me.jpg" alt="Shreya Chaturvedi" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </div>

        {/* Right content section */}
        <div
          className={`flex flex-col justify-center px-8 md:px-12 py-16 md:py-0 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="max-w-lg">
            {/* Roles typing effect */}
            <div
              className={`flex items-center mb-6 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <div className="w-12 h-0.5 bg-soft-blue mr-4"></div>
              <p className="text-soft-blue font-medium uppercase tracking-wide transition-all duration-500">
                {text}
                <span className="blinking-cursor">|</span>
              </p>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-7xl font-bold font-poppins mb-4 text-white leading-tight transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              SHREYA &nbsp;CHATURVEDI
            </h1>

            {/* <p
              className={`text-lg md:text-xl text-gray-300 mb-8 max-w-md transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              Software Developer | Web Developer | Problem Solver
            </p> */}

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              <a
                href="#contact"
                className="bg-soft-blue text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 hover:scale-105 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="bg-transparent border border-gray-500 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 hover:scale-105 transition-all"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="scroll-indicator bounce absolute bottom-10 left-1/2 transform -translate-x-1/2"
        onClick={scrollToAbout}
      >
        <ArrowDown className="w-8 h-8 text-white opacity-70" />
      </div>
    </section>
  );
};

export default HomeSection;
