import React from "react";

const CalculatedRow = ({ value = 0 }) => {
  return (
    // To do- shrink font size with overflow
    <div className="grid grid-cols-4 h-20 text-white">
      <p className="col-span-full text-right pr-1 text-[4rem]">{value}</p>
    </div>
  );
};

export default CalculatedRow;
