import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Switcher from "./Switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
              <Switcher />
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
                to="/portfolio/home"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                HOME
              </Link>
              <Link
                to="/portfolio/about"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                ABOUT ME
              </Link>
              <Link
                to="/portfolio/projects"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                PROJECTS
              </Link>
              <Link
                to="/portfolio/resume"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Resume
              </Link>
              <Link
                to="/portfolio/skills"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Skills
              </Link>

              <Link
                to="/portfolio/contact"
                className="text-white hover:border-white border-transparent border-2 hover:border-current hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
              <div>
                <label
                  className={`switch ${
                    isDarkMode ? "dark-mode" : "light-mode"
                  } , bg-red-500`}
                >
                  <span className="sun">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="#ffd43b">
                        <circle r="5" cy="12" cx="12"></circle>
                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="moon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                    </svg>
                  </span>
                  <input
                    type="checkbox"
                    className="input"
                    onChange={toggleDarkMode}
                  />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
