import { StyleSheet } from "react-native";
import * as fonts from "./fonts";
import { Monokai } from "./colors/monokai";

export const style = StyleSheet.create({
  h1: {
    fontSize: fonts.bigSize,
    fontWeight: fonts.heavyWeight,
  },
  bg: {
    backgroundColor: "#9f2c42",
  },
});
