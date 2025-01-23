import React from "react";

export const InputBox = ({ label, id, value, placeholder, onChange }) => {
  return (
    <label>
      {label}
      <input type="text" id={id} value={value} placeholder={placeholder} onChange={onChange} />
    </label>
  );
};

export default InputBox;
