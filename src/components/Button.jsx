import React from "react";

export const Button = ({ children, onClick, type }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
