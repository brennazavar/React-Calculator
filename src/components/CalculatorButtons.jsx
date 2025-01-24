import React from "react";
import Row from "./Row";
import CalculatedRow from "./CalculatedRow";
import BottomRow from "./BottomRow";

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

  const functions = [
    () => {
      // C
      console.log("clicked");
    },
    () => {
      // +/-
      console.log("clicked");
    },
    () => {
      // %
      console.log("clicked");
    },
    () => {
      // /
      console.log("clicked");
    },
    () => {
      // 7
      console.log("clicked");
    },
    () => {
      // 8
      console.log("clicked");
    },
    () => {
      // 9
      console.log("clicked");
    },
    () => {
      // X
      console.log("clicked");
    },
    () => {
      // 4
      console.log("clicked");
    },
    () => {
      // 5
      console.log("clicked");
    },

    () => {
      // 6
      console.log("clicked");
    },
    () => {
      // -
      console.log("clicked");
    },
    () => {
      // 1
      console.log("clicked");
    },
    () => {
      // 2
      console.log("clicked");
    },
    () => {
      // 3
      console.log("clicked");
    },
    () => {
      // +
      console.log("clicked");
    },
    () => {
      // 0
      console.log("clicked");
    },
    () => {
      // .
      console.log("clicked");
    },
    () => {
      // =
      console.log("clicked");
    },
  ];

  let calculatedValue = 0;
  let dividend = null;
  let divisor = null;

  return (
    <div
      className="grid grid-cols-1 w:full h:full"
      onClick={() => console.log("clicked")}
    >
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
