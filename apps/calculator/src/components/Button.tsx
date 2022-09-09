import { useContext, useMemo } from "react";
import {
  FlexAlignType,
  FlexStyle,
  Text,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export type ButtonProps = {
  onClick: () => void;
  children: string;
  variant?: undefined | "primary" | "secondary";
  style: undefined | object;
};

const btnStyle = {
  width: 72,
  flexShrink: 1,
  flexBasis: 72,
  borderRadius: 24,
  justifyContent: "center" as FlexStyle["justifyContent"],
  alignItems: "center" as FlexAlignType,
  margin: 0,
};

const textStyle = {
  fontWeight: "bold" as TextStyle["fontWeight"],
  fontSize: 20,
};

export const Button = ({ onClick, children, variant, style }: ButtonProps) => {
  const { theme } = useContext(ThemeContext);
  const [btnTheme, textTheme] = useMemo(() => {
    switch (variant) {
      case "primary":
        return [theme.btnPrimary, theme.textPrimary];
      case "secondary":
        return [theme.btnSecondary, theme.textPrimary];
      default:
        return [theme.btn, theme.text];
    }
  }, [variant]);

  return (
    <TouchableOpacity
      style={[style || {}, btnStyle, btnTheme]}
      onPress={onClick}
    >
      <Text style={[textStyle, textTheme]}>{children}</Text>
    </TouchableOpacity>
  );
};
