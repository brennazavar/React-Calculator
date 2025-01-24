import React from "react";

const Button = ({ handleClick, styles, text = "X" }) => {
  return (
    <button
      className={
        "p-4 border-black bg-white text-gray-900 border border-gray-200 " +
        styles
      }
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
