
import React from 'react';
import { Code, Layout, Users, Monitor } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Web Development",
      icon: <Code className="h-8 w-8" />,
      description: "Creating responsive and dynamic web applications using modern frameworks and best practices."
    },
    {
      title: "Frontend Developer",
      icon: <Layout className="h-8 w-8" />,
      description: "Building interactive user interfaces with modern JavaScript frameworks like React and Vue.js."
    },
    {
      title: "Full Stack Developer",
      icon: <Monitor className="h-8 w-8" />,
      description: "Developing complete web applications from frontend to backend with database integration."
    },
    {
      title: "Collaborative Coding",
      icon: <Users className="h-8 w-8" />,
      description: "Working within development teams to contribute to projects and deliver quality software."
    }
  ];
  
  return (
    <section id="services" className="py-24 bg-navy relative overflow-hidden">
      <div className="shape-circle bottom-left opacity-30"></div>
      
      <div className="section-padding relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center mb-4">
            <div className="w-12 h-0.5 bg-soft-blue mr-4"></div>
            <p className="text-soft-blue font-medium uppercase tracking-wide">Services</p>
            <div className="w-12 h-0.5 bg-soft-blue ml-4"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">What I Offer</h2>
          <p className="text-gray-400 max-w-xl mx-auto italic">
            Note: These services reflect my skills and areas of expertise, though I am not yet offering them professionally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="reveal backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-8 text-center hover:border-soft-blue/30 transition-all duration-300"
            >
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-soft-blue/10 text-soft-blue mb-8 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-poppins text-white mb-4">
                {service.title}
              </h3>
              <div className="w-12 h-0.5 bg-soft-blue/50 mx-auto mb-6"></div>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
