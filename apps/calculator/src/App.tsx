import { StatusBar } from "expo-status-bar";
import { Bg } from "./components/Bg";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { ThemeSwitch } from "./components/ThemeSwitch";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Bg>
        <StatusBar style="auto" />
        <ThemeSwitch />
        <Keyboard />
      </Bg>
    </ThemeProvider>
  );
}
