import { ResultContainer, renderHook } from "@testing-library/react-hooks";
import { act } from "@testing-library/react-native";
import {
  KeyboardInput,
  KeyboardValue,
  OpString,
  useKeyboard,
} from "./useKeyboard";

describe("useKeyboard", () => {
  let hook: ResultContainer<{
    display: string;
    input: (val: KeyboardInput) => void;
  }>;

  beforeEach(() => {
    hook = renderHook(() => useKeyboard());
  });

  const input = (value: KeyboardInput) => {
    act(() => {
      hook.result.current.input(value);
    });
  };

  const display = () => hook.result.current.display;

  it("12.3 back back back back", () => {
    const { result } = renderHook(() => useKeyboard());
    input("1");
    input("2");
    input(".");
    input("3");
    expect(display()).toEqual("12.3");
    input(OpString.BACK);
    expect(display()).toEqual("12.");
    input(OpString.BACK);
    expect(display()).toEqual("12");
    input(OpString.BACK);
    expect(display()).toEqual("1");
    input(OpString.BACK);
    expect(display()).toEqual("");
  });

  it("-123 x 2 = -246", () => {
    "123".split("").forEach((c) => input(c as KeyboardValue));
    input(OpString.NEG);
    input(OpString.MULT);
    input("2");
    input(OpString.EQ);
    expect(display()).toEqual("-246");
  });

  it("clears", () => {
    "123".split("").forEach((c) => input(c as KeyboardValue));
    expect(display()).toEqual("123");
    input(OpString.CLEAR);
    expect(display()).toEqual("");
  });

  test.each([
    ["11.1", OpString.MULT, "2", "22.2"],
    ["11.1", OpString.ADD, "2", "13.1"],
    ["11.1", OpString.SUB, "2", "9.1"],
    ["11.1", OpString.MOD, "2", "1.1"],
    ["22.2", OpString.DIV, "2", "11.1"],
  ])("%s %s %s = %s", (n1: string, op: OpString, n2: string, ans: string) => {
    n1.split("")
      .filter((c) => c !== ",")
      .forEach((c) => input(c as KeyboardValue));
    expect(display()).toEqual(n1);
    input(op);
    n2.split("")
      .filter((c) => c !== ",")
      .forEach((c) => input(c as KeyboardValue));
    expect(display()).toEqual(n2);
    input(OpString.EQ);
    expect(display()).toEqual(ans);
  });

  it("formats big numbers nicely", () => {
    input("1");
    input("2");
    input("3");
    input("4");
    input("5");
    expect(display()).toEqual("12,345");
  });
});
