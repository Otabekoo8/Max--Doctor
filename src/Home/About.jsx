import React from "react";

import { ThemeProvider, useTheme } from "./ThemeContext"; // Import ThemeProvider and useTheme
// import "./About.css";
import "./About.css"
import Header from "./Header";
import Home from "./Home";
import Slider from "./Slider";

// Moved ThemeProvider to a higher level
export function Abouts() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

const MainContent = () => {
  const { isDarkMode } = useTheme(); // Access the theme context

  return (
    <div className={`mainContainer ${isDarkMode ? "dark" : "light"}`}>
      <Header />
      <Home />
      <Slider />
    </div>
  );
};
