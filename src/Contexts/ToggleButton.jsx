import React, { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../Contexts/ThemeContext"; // ✅ Ensure correct import

const ToggleButton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext); // ✅ Correct function name

  return (
    <div>
      <button onClick={toggleTheme} className="cursor-pointer p-2">
        {darkMode ? (
          <FaMoon className="inline m-2 text-yellow-500" />
        ) : (
          <FaSun className="inline m-2 text-gray-800" />
        )}
      </button>
    </div>
  );
};

export default ToggleButton;
