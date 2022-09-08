import { useContext } from "react";
import { Switch } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeSwitch = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return <Switch value={isDark} onValueChange={toggleTheme} />;
};
