import React from "react";

export const InputBox = ({ label, type, id, value, placeholder, onChange }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </label>
  );
};

export default InputBox;
