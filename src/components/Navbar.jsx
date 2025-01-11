import React, { useState, useEffect } from "react";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { FaSun, FaMoon } from "react-icons/fa"; // Import icons
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check initial theme preference from localStorage or system settings
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experiance" },
    { id: 5, text: "Contact" },
  ];

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Apply dark mode class to root element and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
      <div className="flex justify-between items-center h-16 text-black dark:text-white">
        <div className="flex space-x-2">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <h1 className="font-semibold text-xl cursor-pointer">
            Vivek<span className="text-green-500 text-2xl">kumar</span>
            <p className="text-sm">Web Developer</p>
          </h1>
        </div>

        {/* Desktop Navbar */}
        <div className="flex items-center">
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer hover:text-brown-600 hover:font-bold"
                key={id}
              >
                <Link
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <FaSun className="text-yellow-400" size={20} /> // Sun for Dark Mode
            ) : (
              <FaMoon className="text-gray-600" size={20} /> // Moon for Light Mode
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <div onClick={() => setMenu(!menu)} className="md:hidden ml-4">
            {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      {menu && (
        <div className="bg-white dark:bg-gray-900">
          <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl text-black dark:text-white">
            {navItems.map(({ id, text }) => (
              <li
                className="hover:scale-105 duration-200 cursor-pointer hover:text-brown-600 hover:font-bold"
                key={id}
              >
                <Link
                  onClick={() => setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                >
                  {text}
                </Link>
              </li>
            ))}
            {/* Dark Mode Toggle in Mobile Menu */}
            {/* <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
              >
                {darkMode ? (
                  <FaSun className="text-yellow-400" size={20} /> // Sun
                ) : (
                  <FaMoon className="text-gray-600" size={20} /> // Moon
                )}
              </button>
            </li> */}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
