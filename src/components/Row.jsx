import React from "react";
import Button from "./Button";

function Row({ values, functions }) {
  return (
    <div className="grid grid-cols-4 h-15 gap-2 place-items-center">
      {values.map((value, index) => (
        <Button key={index} text={value} handleClick={functions[index]} />
      ))}
    </div>
  );
}

export default Row;
