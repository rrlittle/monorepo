import { useCallback, useMemo, useState } from "react";

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
  const [currentNumber, setCurrentNumber] = useState("");
  const [prevNumber, setPrevNumber] = useState("");
  const [op, setOp] = useState<OpString | null>(null);

  const display = useMemo(() => {
    const toDisplay =
      currentNumber === "" ? "" : Number(currentNumber).toLocaleString();
    return currentNumber.endsWith(".") ? toDisplay + "." : toDisplay;
  }, [currentNumber]);

  const clear = useCallback(() => {
    setCurrentNumber("");
    setPrevNumber("");
    setOp(null);
  }, [setCurrentNumber, setPrevNumber, setOp]);

  const makeNeg = useCallback(() => {
    if (currentNumber !== "") {
      setCurrentNumber(
        currentNumber.startsWith("-")
          ? currentNumber.slice(1)
          : "-" + currentNumber,
      );
    }
  }, [currentNumber, setCurrentNumber]);

  const getResult = useCallback(() => {
    const _currentNumber = Number(currentNumber);
    const _prevNumber = Number(prevNumber);
    switch (op) {
      case OpString.ADD:
        return _currentNumber + _prevNumber;
      case OpString.SUB:
        return _prevNumber - _currentNumber;
      case OpString.DIV:
        return _prevNumber / _currentNumber;
      case OpString.MULT:
        return _currentNumber * _prevNumber;
      case OpString.MOD:
        return _prevNumber % _currentNumber;
      default:
        return null;
    }
  }, [op, currentNumber, prevNumber]);

  const backspace = useCallback(() => {
    setCurrentNumber(currentNumber.slice(0, -1));
  }, [setCurrentNumber, currentNumber]);

  const handleOpPress = useCallback(
    (opValue: OpString) => {
      switch (opValue) {
        case OpString.CLEAR:
          clear();
          break;
        case OpString.NEG:
          makeNeg();
          break;
        case OpString.EQ: {
          const result = getResult();
          clear();
          setCurrentNumber("" + result);
          break;
        }
        case OpString.BACK:
          backspace();
          break;
        default:
          setOp(opValue);
          setPrevNumber(currentNumber);
          setCurrentNumber("");
          break;
      }
    },
    [
      clear,
      makeNeg,
      getResult,
      backspace,
      setOp,
      setPrevNumber,
      setCurrentNumber,
    ],
  );

  const handleNumberPress = useCallback(
    (buttonValue: KeyboardValue) => {
      if (!Number.isNaN(Number(currentNumber + buttonValue))) {
        setCurrentNumber(currentNumber + buttonValue);
      }
    },
    [setCurrentNumber, currentNumber],
  );

  const input = useCallback(
    (value: OpString | KeyboardValue) => {
      if (Object.values(OpString).includes(value as OpString)) {
        handleOpPress(value as OpString);
      } else {
        handleNumberPress(value as KeyboardValue);
      }
    },
    [handleOpPress, handleNumberPress],
  );

  return { input, backspace, display };
};
