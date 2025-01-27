import React from "react";
import Row from "./Row";
import CalculatedRow from "./CalculatedRow";
import BottomRow from "./BottomRow";
import { useState } from "react";

const [isDividend, setIsDividend] = useState(true);
const [action, setAction] = useState(null);

let calculatedValue = 0;
let dividend = 0;
let divisor = 0;

const CalculatorButtons = () => {
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

  function numberPress({ num }) {
    return isDividend
      ? (dividend = parseFloat(dividend + "" + num))
      : (divisor = parseFloat(divisor + "" + num));
  }

  function calculate({ dividend, divisor, action }) {
    if (divisor !== 0) {
      switch (action) {
        case "+":
          return (calculatedValue = dividend + divisor);
        case "-":
          return (calculatedValue = dividend - divisor);
        case "X":
          return (calculatedValue = dividend * divisor);
        case "/":
          return (calculatedValue = dividend / divisor);
        case "%":
          return (calculatedValue = dividend % divisor);
      }
    } else {
      calculatedValue = "error";
    }
  }

  const functions = [
    () => {
      // C
      dividend = 0;
      divisor = 0;
      calculatedValue = 0;
      setAction(null);
    },
    () => {
      // +/-
      isDividend ? (dividend = -dividend) : (divisor = -divisor);
    },
    () => {
      // %
      setAction("%");
      setIsDividend(false);
    },
    () => {
      // /
      setAction("/");
      setIsDividend(false);
    },
    () => {
      // 7
      numberPress(7);
    },
    () => {
      // 8
      numberPress(8);
    },
    () => {
      // 9
      numberPress(9);
    },
    () => {
      // X
      setAction("X");
      setIsDividend(false);
    },
    () => {
      // 4
      numberPress(4);
    },
    () => {
      // 5
      numberPress(5);
    },
    () => {
      // 6
      numberPress(6);
    },
    () => {
      // -
      setAction("-");
      setIsDividend(false);
    },
    () => {
      // 1
      numberPress(1);
    },
    () => {
      // 2
      numberPress(2);
    },
    () => {
      // 3
      numberPress(3);
    },
    () => {
      // +
      setAction("+");
      setIsDividend(false);
    },
    () => {
      // 0
      numberPress(0);
    },
    () => {
      // .
      numberPress(".");
    },
    () => {
      // =
      console.log("equals");
      calculate(dividend, divisor, action);
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-2">
      <CalculatedRow value={calculatedValue} />
      <Row values={rows.slice(0, 4)} functions={functions.slice(0, 4)} />
      <Row values={rows.slice(4, 8)} functions={functions.slice(4, 8)} />
      <Row values={rows.slice(8, 12)} functions={functions.slice(8, 12)} />
      <Row values={rows.slice(12, 16)} functions={functions.slice(12, 16)} />
      <BottomRow
        values={rows.slice(16, 19)}
        functions={functions.slice(16, 19)}
      />
    </div>
  );
};

export default CalculatorButtons;
