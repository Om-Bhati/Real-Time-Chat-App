import { useThemeStore } from "../store/useThemeStore"; 
import { Moon, Sun } from "lucide-react"; // Import icons for light and dark mode

const ThemeToggleButton = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    // Toggle between light and dark themes
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-base-200 hover:bg-base-300 transition-colors"
    >
      {theme === "dark" ? (
        <Sun size={24} className="text-yellow-500" />
      ) : (
        <Moon size={24} className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
