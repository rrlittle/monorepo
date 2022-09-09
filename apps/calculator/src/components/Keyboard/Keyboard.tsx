import { useContext } from "react";
import { FlexAlignType, FlexStyle, Text, TextStyle, View } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "../Button";
import { useKeyboard, OpString, KeyboardInput } from "./useKeyboard";

export type KeyboardProps = {};

const rowStyle = {
  maxWidth: "100%",
  flexDirection: "row" as FlexStyle["flexDirection"],
  marginBottom: 6,
};
const displayStyle = {
  maxWidth: "100%",
  height: 30,
  backgroundColor: "tomato",
  justifyContent: "center" as FlexStyle["justifyContent"],
  alignItems: "center" as FlexAlignType,
  marginBottom: 6,
  borderRadius: 24,
};

const containerStyle = {
  maxWidth: "70%",
};

const displayTextStyle = {
  fontSize: 20,
  fontWeight: "bold" as TextStyle["fontWeight"],
};

const layout: KeyboardInput[][] = [
  [OpString.CLEAR, OpString.BACK, OpString.MOD, OpString.DIV],
  ["7", "8", "9", OpString.MULT],
  ["4", "5", "6", OpString.SUB],
  ["1", "2", "3", OpString.ADD],
  [".", "0", OpString.NEG, OpString.EQ],
];

export const Keyboard = ({}: KeyboardProps) => {
  const { input, display } = useKeyboard();
  const { theme } = useContext(ThemeContext);
  return (
    <View style={containerStyle} accessibilityLabel="keyboard-container">
      <View
        style={[displayStyle, theme.bgSecondary]}
        accessibilityRole="alert"
        accessibilityLabel="keyboard-display"
      >
        <Text style={displayTextStyle}>{display || ""}</Text>
      </View>
      {layout.map((row) => (
        <View
          key={JSON.stringify(row)}
          style={rowStyle}
          accessibilityLabel="keyboard-button-row"
        >
          <>
            {row.map((content) => (
              <Button
                accessibilityLabel="keyboard-button"
                style={{ marginHorizontal: 3 }}
                key={content}
                onClick={() => input(content)}
                variant={
                  Object.values(OpString).includes(content as OpString)
                    ? "secondary"
                    : "primary"
                }
              >
                {content}
              </Button>
            ))}
          </>
        </View>
      ))}
    </View>
  );
};
