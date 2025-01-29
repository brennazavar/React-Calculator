import React from "react";

const Button = ({ handleClick, styles, text = "X" }) => {
  return (
    <button
      className={
        "rounded-full w-[60px] h-[60px] hover:bg-gray-300 transition duration-100 ease-in-out " +
        styles
      }
      onClick={handleClick}
    >
      <strong>{text}</strong>
    </button>
  );
};

export default Button;
