import { LightTheme, DarkTheme } from "../themes";
import { createContext, useCallback, useEffect, useState } from "react";
import { Appearance } from "react-native";

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
  const [themeName, setTheme] = useState(
    Appearance.getColorScheme() === "light" ? "light" : "dark",
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener((prefs) =>
      setTheme(prefs.colorScheme === "light" ? "light" : "dark"),
    );
    return () => subscription.remove();
  }, [setTheme]);

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
