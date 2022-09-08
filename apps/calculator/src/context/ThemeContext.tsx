import { LightTheme, DarkTheme } from "../themes";
import { createContext, useCallback, useState } from "react";

export type ThemeContextState = {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
  themeName: string;
};

export const ThemeContext = createContext<ThemeContextState>({
  theme: DarkTheme,
  toggleTheme: () => {},
  isDark: true,
  themeName: "dark",
});

export type ThemeProviderProps = {
  children: JSX.Element;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    setTheme(themeName === "dark" ? "light" : "dark");
  }, [setTheme, themeName]);

  const state = {
    themeName,
    theme: themeName === "dark" ? DarkTheme : LightTheme,
    toggleTheme,
    isDark: themeName === "dark",
  };
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};
