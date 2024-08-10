import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "sukuna.jpg";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};