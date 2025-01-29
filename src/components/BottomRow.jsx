import React from "react";
import Button from "./Button";

const BottomRow = ({ values, functions, styles }) => {
  return (
    <div className="grid grid-cols-4 h-15 gap-2 place-items-center">
      {values.map((value, index) =>
        index === 0 ? (
          <Button
            key={index}
            text={value}
            styles={styles + "col-span-2 w-[143px]"}
            handleClick={functions[index]}
          />
        ) : index === 2 ? (
          <Button
            key={index}
            text={value}
            handleClick={functions[index]}
            styles="bg-orange-500 text-gray-900"
          />
        ) : (
          <Button
            key={index}
            text={value}
            handleClick={functions[index]}
            styles={styles}
          />
        )
      )}
    </div>
  );
};

export default BottomRow;
