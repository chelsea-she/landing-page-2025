"use client";

import * as React from "react";

const ThemeContext = React.createContext({
  theme: "light",
  setTheme: (theme: string) => {},
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
