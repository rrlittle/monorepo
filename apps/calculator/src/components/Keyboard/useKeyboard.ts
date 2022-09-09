import { useCallback, useState } from "react";

export enum OpString {
  CLEAR = "C",
  DIV = "/",
  MULT = "*",
  ADD = "+",
  SUB = "-",
  NEG = "+/-",
  BACK = "⌫",
  EQ = "=",
  MOD = "%",
}

export type KeyboardValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | ".";

export type KeyboardInput = KeyboardValue | OpString;

export const useKeyboard = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [op, setOp] = useState<OpString | null>(null);
  const [rawResult, setResult] = useState<Number | null>(null);

  const result = rawResult === null ? "" : rawResult.toLocaleString();

  const clear = useCallback(() => {
    setFirstNumber("");
    setSecondNumber("");
    setOp(null);
    setResult(null);
  }, [setFirstNumber, setSecondNumber, setOp, setResult]);

  const makeNeg = useCallback(() => {
    if (firstNumber !== "") {
      setFirstNumber(
        firstNumber.startsWith("-") ? firstNumber.slice(1) : "-" + firstNumber,
      );
    }
  }, [firstNumber, setFirstNumber]);

  const getResult = useCallback(() => {
    const _firstNumber = Number(firstNumber);
    const _secondNumber = Number(secondNumber);
    switch (op) {
      case OpString.ADD:
        return _firstNumber + _secondNumber;
      case OpString.SUB:
        return _firstNumber - _secondNumber;
      case OpString.DIV:
        return _firstNumber / _secondNumber;
      case OpString.MULT:
        return _firstNumber * _secondNumber;
      case OpString.MOD:
        return _firstNumber % _secondNumber;
      default:
        return null;
    }
  }, [op, firstNumber, secondNumber]);

  const backspace = useCallback(() => {
    setFirstNumber(firstNumber.slice(1));
  }, []);

  const handleOpPress = useCallback(
    (opValue: OpString) => {
      switch (opValue) {
        case OpString.CLEAR:
          clear();
          break;
        case OpString.NEG:
          makeNeg();
          break;
        case OpString.EQ:
          setResult(getResult());
          break;
        case OpString.BACK:
          backspace();
          break;
        default:
          setOp(opValue);
          setSecondNumber(firstNumber);
          setFirstNumber("");
          break;
      }
    },
    [
      clear,
      makeNeg,
      setResult,
      getResult,
      backspace,
      setOp,
      setSecondNumber,
      setFirstNumber,
    ],
  );

  const handleNumberPress = useCallback(
    (buttonValue: KeyboardValue) => {
      setFirstNumber(firstNumber + buttonValue);
    },
    [setFirstNumber, firstNumber],
  );

  const input = useCallback((value: OpString | KeyboardValue) => {
    if (value in OpString) {
      handleOpPress(value as OpString);
    } else {
      handleNumberPress(value as KeyboardValue);
    }
  }, []);

  return { input, backspace, result };
};
