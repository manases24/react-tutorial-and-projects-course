import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Props {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<Props | undefined>(undefined);

export const Theme = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("darkMode"); // Obtiene el valor guardado en `localStorage`.
    return savedTheme === "true"; // Devuelve `true` si el valor guardado es "true".
  });

  const toggleTheme = () =>   setDarkMode((prev) => !prev);;

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    return;
  }
  return context;
};
