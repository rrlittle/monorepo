import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { ThemeContext, ThemeProvider } from "../../contexts/themeContext";

export type LayoutProps = { children: JSX.Element };
const style = StyleSheet.create({ layout: {} });

export const Layout = ({ children }: LayoutProps) => (
  <ThemeProvider>{({ style.layout, theme.bg }) => <View >{children}</View>}</ThemeProvider>
);
