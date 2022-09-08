import { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export type BgProps = {
  children: React.ReactNode;
};

const style = {
  flex: 1,
  backgroundColor: "#fff",
  alignItems: "center",
  justifyContent: "center",
};

export const Bg = ({ children }: BgProps) => {
  const { theme } = useContext(ThemeContext);
  return <View style={[style, theme.bg]}>{children}</View>;
};
