import React from "react";
import Button from "./Button";

const BottomRow = ({ values, functions }) => {
  return (
    <div className="grid grid-cols-4">
      {values.map((value, index) =>
        index === 0 ? (
          <Button
            key={index}
            text={value}
            styles="col-span-2"
            handleClick={functions[index]}
          />
        ) : (
          <Button key={index} text={value} handleClick={functions[index]} />
        )
      )}
    </div>
  );
};

export default BottomRow;
