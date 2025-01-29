import React from "react";
import Button from "./Button";

function Row({ values, functions, styles }) {
  return (
    <div className="grid grid-cols-4 h-15 gap-2 place-items-center">
      {values.map((value, index) =>
        index === 3 ? (
          <Button
            key={index}
            text={value}
            handleClick={functions[index]}
            styles="bg-gray-400 border border-gray-400 text-gray-900"
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
}

export default Row;
