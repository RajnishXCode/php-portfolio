import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string): void => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-lg shadow-2xl"
          : "bg-black/90 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex justify-between items-center align-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            MARC
          </div>

          <nav className="hidden md:block transition-all duration-300">
            <ul className="flex flex-col md:flex-row md:gap-8 p-8 md:p-0">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Skills
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Testimonials
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("expertise")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Expertise
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block py-3 md:py-2 text-white hover:text-blue-400 transition-colors duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <button
              className="hidden md:block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
            <button
              className="flex md:hidden flex-col p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span
                className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></span>
            </button>
          </div>

          {/* mobile menu */}
          <div
            className={`md:hidden absolute w-3/4 h-screen top-0 right-0 bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-2xl transition-all duration-500 ease-in-out z-[100] ${
              isMobileMenuOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.95) 50%, rgba(0,0,0,0.9) 100%)",
            }}
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer transition-all duration-300 backdrop-blur-sm border border-white/20"
                aria-label="Close menu"
              >
                <span className="block w-5 h-0.5 bg-white rotate-45 translate-y-0.5 rounded-full"></span>
                <span className="block w-5 h-0.5 bg-white -rotate-45 -translate-y-0.5 rounded-full"></span>
              </button>
            </div>

            <div className="px-6 pt-2">
              <div className="mb-8">
                <h3 className="text-blue-400 text-xl font-bold mb-2 tracking-wide">
                  Menu
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              </div>

              <ul className="space-y-3">
                {[
                  { id: "hero", name: "Home" },
                  { id: "skills", name: "Skills" },
                  { id: "projects", name: "Projects" },
                  { id: "testimonials", name: "Testimonials" },
                  { id: "expertise", name: "Expertise" },
                  { id: "services", name: "Services" },
                  { id: "contact", name: "Contact" },
                ].map((link, index) => (
                  <li
                    key={link.id}
                    className={`transform transition-all duration-600 ease-out ${
                      isMobileMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-12 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMobileMenuOpen
                        ? `${(index + 1) * 100}ms`
                        : "0ms",
                    }}
                  >
                    <div
                      onClick={() => scrollToSection(link.id)}
                      className="group relative flex items-center px-5 py-4 rounded-xl bg-white/5 hover:bg-white/15 transition-all duration-300 cursor-pointer border border-white/10 hover:border-blue-400/50 backdrop-blur-sm"
                    >
                      <div className="absolute left-2 w-1 h-8 bg-gradient-to-b from-blue-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-y-0 group-hover:scale-y-100"></div>

                      <div className="w-3 h-3 bg-blue-400/70 rounded-full mr-4 group-hover:bg-blue-400 transition-colors duration-300 group-hover:shadow-md group-hover:shadow-blue-400/50"></div>

                      <span className="text-white text-lg font-medium group-hover:text-blue-400 transition-all duration-300 tracking-wide">
                        {link.name}
                      </span>

                      <div className="ml-auto opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        <div className="w-2 h-2 border-r-2 border-b-2 border-blue-400 rotate-[-45deg]"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-medium w-full my-4"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </button>
            </div>

            <div className="absolute bottom-20 left-6 right-6">
              <div className="relative h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50 mb-6">
                <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"></div>
              </div>
              <div className="text-center">
                <p className="text-white/80 text-sm font-medium tracking-wider mb-1">
                  MARC
                </p>
                <p className="text-blue-400/60 text-xs uppercase tracking-widest font-light">
                  Portfolio
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-400/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-400/5 to-transparent pointer-events-none"></div>
          </div>

          {isMobileMenuOpen && (
            <div
              className="md:hidden fixed inset-0 z-[90]"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
