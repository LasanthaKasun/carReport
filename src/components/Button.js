import React from "react";

const Button = ({ text, onClick, role }) => {
  return (
    <button
      role={role}
      className={`${
        text !== "Back"
          ? "bg-blue-500 hover:bg-blue-700"
          : "bg-orange-500 hover:bg-orange-700"
      }text-white font-bold py-2 px-4 rounded`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
