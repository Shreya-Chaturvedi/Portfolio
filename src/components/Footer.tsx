import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-16 relative">
      <div className="shape-circle bottom-left opacity-20"></div>

      <div className="section-padding relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold font-poppins">
              SC<span className="text-soft-blue">.</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Software Developer & Web Developer
            </p>
          </div>

          {/* <div className="flex space-x-6">
            <a 
              href="https://github.com/shreya-chaturvedi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-soft-blue transition-all group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 group-hover:text-white" />
            </a>
            <a 
              href="https://linkedin.com/in/shreya-chaturvedi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 p-3 rounded-full hover:bg-soft-blue transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 group-hover:text-white" />
            </a>
            <a 
              href="mailto:contact@shreyachaturvedi.com"
              className="bg-white/10 p-3 rounded-full hover:bg-soft-blue transition-all group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 group-hover:text-white" />
            </a>
          </div> */}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p>
              © {new Date().getFullYear()} Shreya Chaturvedi. All rights
              reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
