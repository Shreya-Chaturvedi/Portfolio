import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "services",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 lg:px-16",
          scrolled ? "bg-navy/90 backdrop-blur-md shadow-md" : "bg-transparent"
        )}
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-poppins font-bold text-xl">
            <img
              src="./assets/Curls.png"
              alt=""
              style={{ margin: "0", height: "5rem" }}
            />
          </div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "skills", "projects", "services", "contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={cn(
                    "nav-link font-medium capitalize text-sm tracking-wide",
                    activeSection === item
                      ? "text-white active"
                      : "text-gray-400"
                  )}
                >
                  {item}
                </button>
              )
            )}
          </div>

          <button
            className="md:hidden text-white z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-navy z-40 flex flex-col items-center justify-center transition-all duration-300",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center space-y-8">
          {["home", "about", "skills", "projects", "services", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={cn(
                  "text-2xl font-medium capitalize",
                  activeSection === item ? "text-soft-blue" : "text-white"
                )}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
