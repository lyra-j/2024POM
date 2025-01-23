import React from "react";

export const InputBox = ({ label, id, value, onChange }) => {
  return (
    <label>
      {label}
      <input type="text" id={id} value={value} onChange={onChange} />
    </label>
  );
};

export default InputBox;
