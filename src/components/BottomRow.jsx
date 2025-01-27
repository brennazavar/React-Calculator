import React from "react";
import Button from "./Button";

const BottomRow = ({ values, functions }) => {
  return (
    <div className="grid grid-cols-4 h-15 gap-2 place-items-center">
      {values.map((value, index) =>
        index === 0 ? (
          <Button
            key={index}
            text={value}
            styles="col-span-2 w-[143px]"
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
