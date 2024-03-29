import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-lime-500 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-center h-14 items-center">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {/* Navbar links */}
              <NavLink
                to="/portfolio/home"
                style={({ isActive }) => ({
                  borderColor: isActive ? "white" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                  "&:hover": {
                    borderColor: "currentColor",
                  },
                })}
                className="text-white  hover:text-white px-3 py-2 rounded-md text-sm font-medium  hover:border-white border-transparent border-2 hover:border-current"
              >
                HOME
              </NavLink>
              <NavLink
                to="/portfolio/about"
                style={({ isActive }) => ({
                  borderColor: isActive ? "white" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                  "&:hover": {
                    borderColor: "currentColor",
                  },
                })}
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                ABOUT ME
              </NavLink>
              <NavLink
                to="/portfolio/projects"
                style={({ isActive }) => ({
                  borderColor: isActive ? "white" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                  "&:hover": {
                    borderColor: "currentColor",
                  },
                })}
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                PROJECTS
              </NavLink>
              <NavLink
                to="/portfolio/resume"
                style={({ isActive }) => ({
                  borderColor: isActive ? "white" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                  "&:hover": {
                    borderColor: "currentColor",
                  },
                })}
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                RESUME
              </NavLink>
              <NavLink
                to="/portfolio/skills"
                style={({ isActive }) => ({
                  borderColor: isActive ? "white" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                  "&:hover": {
                    borderColor: "currentColor",
                  },
                })}
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                SKILLS
              </NavLink>

              <NavLink
                to="/portfolio/contact"
                style={({ isActive }) => ({
                  borderColor: isActive ? "white" : "transparent",
                  borderWidth: 2,
                  borderStyle: "solid",
                  "&:hover": {
                    borderColor: "currentColor",
                  },
                })}
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                CONTACT
              </NavLink>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:border-white border-transparent border-2 hover:border-current focus:outline-none focus:bg-lime-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="portfolio/home"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Link>
              <Link
                to="portfolio/about"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                ABOUT ME
              </Link>
              <Link
                to="portfolio/projects"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                PROJECTS
              </Link>
              <Link
                to="portfolio/contact"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Resume
              </Link>
              <Link
                href="portfolio/skills"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </Link>

              <Link
                to="portfolio/contact"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
