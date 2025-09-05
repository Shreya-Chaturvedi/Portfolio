import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-[#121212] relative">
      <div className="shape-circle top-right opacity-30"></div>

      <div className="section-padding relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-soft-blue mr-4"></div>
            <p className="text-soft-blue font-medium uppercase tracking-wide">
              Contact
            </p>
            <div className="w-12 h-0.5 bg-soft-blue ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Get In Touch
          </h2>
        </div>

        <div className="reveal max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold font-poppins text-white mb-6 text-center">
              Contact Information
            </h3>
            <div className="w-12 h-0.5 bg-soft-blue mb-10 mx-auto"></div>

            <div className="flex justify-center items-center gap-10 flex-wrap">
              <div className="flex flex-col items-center text-center">
                <a
                  href="mailto:shreya26chaturvedigmail.com"
                  className="bg-soft-blue/10 p-4 rounded-full hover:bg-soft-blue/20 transition-colors"
                >
                  <Mail className="h-8 w-8 text-soft-blue" />
                </a>
                <p className="text-sm text-gray-400 mt-2">Email</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <a
                  href="tel:+918966091279"
                  className="bg-soft-blue/10 p-4 rounded-full hover:bg-soft-blue/20 transition-colors"
                >
                  <Phone className="h-8 w-8 text-soft-blue" />
                </a>
                <p className="text-sm text-gray-400 mt-2">Phone</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <a
                  href="https://linkedin.com/in/shreya-chaturvedi-55b943288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-soft-blue/10 p-4 rounded-full hover:bg-soft-blue/20 transition-colors"
                >
                  <Linkedin className="h-8 w-8 text-soft-blue" />
                </a>
                <p className="text-sm text-gray-400 mt-2">LinkedIn</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <a
                  href="https://github.com/shreya-chaturvedi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-soft-blue/10 p-4 rounded-full hover:bg-soft-blue/20 transition-colors"
                >
                  <Github className="h-8 w-8 text-soft-blue" />
                </a>
                <p className="text-sm text-gray-400 mt-2">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
