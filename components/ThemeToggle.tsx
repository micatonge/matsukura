import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {isDarkMode ? (
        <SunIcon className="h-5 w-5 text-yellow-400" />
      ) : (
        <MoonIcon className="h-5 w-5 text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
