import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Bg } from "./components/Bg";
import { Button } from "./components/Button";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Bg>
        <StatusBar style="auto" />
        <ThemeSwitch />
        <Text>..asdfas.</Text>
        <Button onClick={() => alert("hello")}>dsafd</Button>
      </Bg>
    </ThemeProvider>
  );
}
