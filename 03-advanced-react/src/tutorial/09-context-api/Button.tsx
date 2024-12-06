import { LuSun } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Button = ({ darkMode, toggleTheme }: Props) => {
  return (
    <button onClick={toggleTheme}>
      {darkMode ? (
        <LuSun className="text-white" size={24} />
      ) : (
        <FaMoon className="text-gray-600" size={24} />
      )}
    </button>
  );
};
