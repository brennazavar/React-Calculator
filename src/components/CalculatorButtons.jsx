import React from "react";
import Row from "./Row";
import CalculatedRow from "./CalculatedRow";
import BottomRow from "./BottomRow";
import { useState } from "react";

const CalculatorButtons = () => {
  const [isDividend, setIsDividend] = useState(true);
  const [calculatedValue, setCalculatedValue] = useState(null);
  const [dividend, setDividend] = useState(0);
  const [divisor, setDivisor] = useState(0);
  const [action, setAction] = useState(null);
  const [isCarried, setIsCarried] = useState(false);

  const rows = [
    "C",
    "+/-",
    "%",
    "/",

    "7",
    "8",
    "9",
    "X",

    "4",
    "5",
    "6",
    "-",

    "1",
    "2",
    "3",
    "+",

    "0",
    ".",
    "=",
  ];

  const functions = [
    () => {
      // C
      handleClearClick();
    },
    () => {
      // +/-
      handlePosNegClick();
    },
    () => {
      // %
      handleOperationClick("%");
    },
    () => {
      // /
      handleOperationClick("/");
    },
    () => {
      // 7
      handleNumberClick(7);
    },
    () => {
      // 8
      handleNumberClick(8);
    },
    () => {
      // 9
      handleNumberClick(9);
    },
    () => {
      // X
      handleOperationClick("X");
    },
    () => {
      // 4
      handleNumberClick(4);
    },
    () => {
      // 5
      handleNumberClick(5);
    },
    () => {
      // 6
      handleNumberClick(6);
    },
    () => {
      // -
      handleOperationClick("-");
    },
    () => {
      // 1
      handleNumberClick(1);
    },
    () => {
      // 2
      handleNumberClick(2);
    },
    () => {
      // 3
      handleNumberClick(3);
    },
    () => {
      // +
      handleOperationClick("+");
    },
    () => {
      // 0
      handleNumberClick(0);
    },
    () => {
      // .
      handleDotClick();
    },
    () => {
      // =
      handleEqualsClick();
    },
  ];

  function getValueAsNumber(val) {
    return isNaN(parseFloat(val)) ? null : parseFloat(val);
  }

  function handleNumberClick(num) {
    if (isDividend) {
      (dividend === null) | isCarried
        ? setDividend(getValueAsNumber(num))
        : setDividend(getValueAsNumber(dividend + "" + num));
    } else {
      (divisor === null) | isCarried
        ? setDivisor(getValueAsNumber(num))
        : setDivisor(getValueAsNumber(divisor + "" + num));
    }
    console.log(dividend, divisor);
    setIsCarried(false);
  }

  function handleDotClick() {
    let str;
    if (isDividend) {
      str = dividend.toString();
      if ((dividend === 0) | isCarried) {
        setDividend("0.");
      } else if (str.includes(".")) {
        return;
      } else {
        setDividend(dividend + ".");
      }
    } else {
      str = divisor.toString();
      if ((divisor === 0) | isCarried) {
        setDivisor("0.");
      } else if (str.includes(".")) {
        return;
      } else {
        setDivisor(divisor + ".");
      }
    }
  }

  function handleClearClick() {
    setCalculatedValue(0);
    setDividend(0);
    setDivisor(0);
    setIsDividend(true);
    setCalculatedValue(0);
    setIsCarried(false);
    console.log(
      calculatedValue,
      dividend,
      divisor,
      isDividend,
      calculatedValue
    );
  }

  function handlePosNegClick() {
    isDividend ? setDividend(-dividend) : setDivisor(-divisor);
    console.log(dividend, divisor);
  }

  function handleOperationClick(operation) {
    setAction(operation);
    setIsDividend(false);
    console.log(action, isDividend);
    setIsCarried(false);
  }

  function handleEqualsClick() {
    let value;
    switch (action) {
      case "%":
        value = dividend % divisor;
        break;
      case "/":
        value = dividend / divisor;
        break;
      case "X":
        value = dividend * divisor;
        break;
      case "-":
        value = dividend - divisor;
        break;
      case "+":
        value = dividend + divisor;
        break;
      case null:
        value = dividend;
    }
    setDividend(value);
    setIsDividend(true);
    setDivisor(0);
    setIsCarried(true);
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      <CalculatedRow value={isDividend ? dividend : divisor} />
      <Row
        values={rows.slice(0, 4)}
        functions={functions.slice(0, 4)}
        styles="bg-gray-400 "
      />
      <Row
        values={rows.slice(4, 8)}
        functions={functions.slice(4, 8)}
        styles="bg-white "
      />
      <Row
        values={rows.slice(8, 12)}
        functions={functions.slice(8, 12)}
        styles="bg-white "
      />
      <Row
        values={rows.slice(12, 16)}
        functions={functions.slice(12, 16)}
        styles="bg-white "
      />
      <BottomRow
        values={rows.slice(16, 19)}
        functions={functions.slice(16, 19)}
        styles="bg-white "
      />
    </div>
  );
};

export default CalculatorButtons;
