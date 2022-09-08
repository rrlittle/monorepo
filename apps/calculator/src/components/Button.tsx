import { useContext } from "react";
import { FlexAlignType, FlexStyle, Text, TouchableOpacity } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export type ButtonProps = {
  onClick: () => void;
  children: string;
};

const btnStyle = {
  width: 72,
  height: 72,
  borderRadius: 24,
  justifyContent: "center" as FlexStyle["justifyContent"],
  alignItems: "center" as FlexAlignType,
  margin: 0,
};

const textStyle = {};

export const Button = ({ onClick, children }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity style={[btnStyle, theme.btn]} onPress={onClick}>
      <Text style={[textStyle, theme.textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};
