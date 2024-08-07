import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCog } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import "./Aboutcss/Header.css";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out p-4 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } ${isScrolled ? "blurred" : ""}`}
    >
      <div className="flex items-center justify-between">
        <div className="logo">
          <h1 className="text-2xl">Logo</h1>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul
          className={`flex space-x-4 items-center md:flex ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <a
              href="#"
              className={`hover:${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`hover:${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`hover:${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Section
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`hover:${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Main
            </a>
          </li>
          <li>
            <button
              className="theme-toggle bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition flex items-center"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <img
                  src="./imgs/night-mode2.png"
                  alt="Light Mode Icon"
                  className="h-6 w-6"
                />
              ) : (
                <img
                  src="./imgs/night-mode.png"
                  alt="Dark Mode Icon"
                  className="h-6 w-6"
                />
              )}
            </button>
          </li>
          {/* Settings Button */}
          <li>
            <button
              className="settings-button bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition flex items-center"
              onClick={toggleSettings}
            >
              <FaCog className="h-6 w-6" />
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden flex flex-col items-center`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Section
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Main
            </a>
          </li>
        </ul>
      </div>

      {/* Settings Panel */}
      {isSettingsOpen && (
        <div className="settings-panel">
          <button
            className="theme-toggle bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition flex items-center"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? (
              <img
                src="./imgs/night-mode2.png"
                alt="Light Mode Icon"
                className="h-6 w-6"
              />
            ) : (
              <img
                src="./imgs/night-mode.png"
                alt="Dark Mode Icon"
                className="h-6 w-6"
              />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
