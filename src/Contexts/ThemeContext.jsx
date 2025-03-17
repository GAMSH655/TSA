import React, { createContext, useState, useContext ,useEffect } from "react";

const ThemeContext = createContext(); 

const ThemeProvider = ({ children }) => { 
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };
  useEffect(() => {
    document.body.classList.add("transition-colors", "duration-500");
    if (darkMode) {
      document.body.classList.add("bg-black", "text-white", "shadow-xl", "shadow-gray-800");
    } else {
      document.body.classList.remove("bg-black", "text-white", "shadow-xl", "shadow-gray-800");
    }
  }, [darkMode]);


  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children} 
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider }; 

// Custom Hook for easier access
export const useTheme = () => useContext(ThemeContext);
