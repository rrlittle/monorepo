import { Text } from "react-native";
import { style } from "../styles/default";

interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => (
  <Text accessibilityLabel="header" style={style.h1}>
    some test text
    {text}
  </Text>
);
