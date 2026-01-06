import React, { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const navLinks = [
    {
      name: "Home",
      id: "home",
      href: "#home",
      text: "Home",
    },
    {
      name: "About",
      id: "about",
      href: "#about",
      text: "About",
    },
    {
      name: "Services",
      id: "services",
      href: "#services",
      text: "Services",
    },
    {
      name: "Skills",
      id: "skills",
      href: "#skills",
      text: "Skills",
    },
    {
      name: "Projects",
      id: "projects",
      href: "#projects",
      text: "Projects",
    },
    {
      name: "Support",
      id: "support",
      href: "#support",
      text: "Support",
    },
  ];
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header
      className={`w-full fixed top-0 z-50 shadow-lg backdrop-blur-lg transition-all duration-300 ${
        isScrolled
          ? "bg-base-100 backdrop-blur-lg shadow-lg"
          : "bg-black backdrop-blur-md"
      } border-b border-base-300 `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          {}
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-base-300 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-primary font-bold text-base sm:text-lg lg:text-xl">
                  N
                </span>
              </div>
              <span className="font-bold text-lg sm:text-xl lg:text-2xl text-base-content">
                MOHAMMAD_NAYEEM
              </span>
            </a>
          </div>

          {}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(link.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`text-sm lg:text-base font-medium transition-colors relative group ${
                    isActive
                      ? "text-primary"
                      : "text-neutral hover:text-primary"
                  }`}
                >
                  {link.text}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              );
            })}
          </nav>

          {}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <a
              href="/assets/NAYEEM.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1.5 lg:space-x-2 px-3 lg:px-4 py-1.5 lg:py-2 text-xs lg:text-sm font-medium text-base-content border border-neutral/30 rounded-md hover:bg-base-300 transition-all hover:shadow-md transform hover:scale-105"
            >
              <span>Resume</span>
              <ExternalLink className="h-3 w-3 lg:h-4 lg:w-4" />
            </a>
            <button className="px-4 lg:px-6 py-1.5 lg:py-2 text-xs lg:text-sm font-medium bg-primary text-primary-content rounded-md hover:bg-secondary transition-all shadow-sm hover:shadow-lg transform hover:scale-105">
              Hire Me
            </button>
          </div>

          {}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-primary hover:bg-base-100 rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>

        {}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-auto opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-base-300">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2.5 text-sm sm:text-base font-medium text-base-content hover:text-primary rounded-md hover:bg-base-300 transition-colors"
                >
                  {link.text}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-base-300 flex flex-col space-y-2">
                <a
                  href="#"
                  className="flex items-center justify-center space-x-2 px-3 py-2.5 text-sm font-medium border border-base-300 rounded-md hover:bg-base-100 transition-colors"
                >
                  <span>Resume</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button className="px-3 py-2.5 text-sm font-medium bg-base-100 text-primary dark:text-gray-900 rounded-md hover:bg-base-300 transition-colors">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
