import React from "react";

const Input = (label, state, onChange, name) => {
  return (
    <div className="input">
      <input name={name} value={state} onChange={onChange} />
      <label>{label}</label>
    </div>
  );
};

export default Input;
