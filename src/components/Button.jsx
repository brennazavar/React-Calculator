import React from "react";

const Button = ({ handleClick, styles, text = "X" }) => {
  return (
    <button
      className={
        "bg-white text-gray-900 border border-gray-200 rounded-full w-[60px] h-[60px] " +
        styles
      }
      onClick={handleClick}
    >
      <strong>{text}</strong>
    </button>
  );
};

export default Button;
