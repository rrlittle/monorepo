import { createContext, useCallback, useState } from "react";
import { Appearance } from "react-native";
import * as themes from "../themes";
import { Theme } from "../themes/Theme";

const defaultThemeName = "Monokai";
const defaultTheme = themes.Monokai;

export const ThemeContext = createContext<Theme>(defaultTheme);

export type ThemeProviderProps = {
  children: JSX.Element;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeContext] = useState(() => {
    const scheme = Appearance.getColorScheme();
    if (!themes?.[scheme])
      console.warn(
        `theme preference ${scheme} unavailable. defaulting to ${defaultThemeName}`,
      );
    return themes?.[scheme] || defaultTheme;
  });

  const setTheme = useCallback(
    (newThemeName: string) => {
      const newTheme = themes?.[newThemeName];
      if (newTheme) {
        setThemeContext(newTheme);
      } else {
        console.warn(`theme ${newThemeName} not recognized`);
      }
    },
    [setThemeContext],
  );

  const themeNames = Object.keys(themes);
  const state = {
    theme,
    setTheme,
    themeNames,
  };
  return (
    <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
  );
};
