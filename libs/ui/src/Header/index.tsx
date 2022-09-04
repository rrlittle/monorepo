import { Text } from "react-native";
import { style } from "../styles/default";

export interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => (
  <Text accessibilityLabel="header" style={style.h1}>
    some extra text
    {text}
  </Text>
);
