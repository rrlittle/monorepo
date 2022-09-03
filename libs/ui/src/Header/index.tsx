import { Text } from "react-native";
import { style } from "../styles/default";

export type HeaderProps = {
  text: string;
};

export const Header = ({ text }: HeaderProps) => (
  <Text accessibilityLabel="header" style={style.h1}>
    {text}
  </Text>
);
