import { FlexStyle, View } from "react-native";
import { Button } from "../Button";
import { useKeyboard, OpString, KeyboardInput } from "./useKeyboard";

export type KeyboardProps = {};

const keyboardStyle = {};
const rowStyle = {
  maxWidth: "100%",
  flexDirection: "row" as FlexStyle["flexDirection"],
  margin: "5px" as FlexStyle["margin"],
  marginBottom: "0.2rem",
};

const layout: KeyboardInput[][] = [
  [OpString.CLEAR, OpString.BACK, OpString.MOD, OpString.DIV],
  ["7", "8", "9", OpString.MULT],
  ["4", "5", "6", OpString.SUB],
  ["1", "2", "3", OpString.ADD],
  [".", "0", OpString.NEG, OpString.EQ],
];

export const Keyboard = ({}: KeyboardProps) => {
  const { input, result } = useKeyboard();

  return (
    <>
      {layout.map((row) => (
        <View key={JSON.stringify(row)} style={rowStyle}>
          <>
            {row.map((content) => (
              <Button
                style={{ marginHorizontal: 5 }}
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
    </>
  );
};
