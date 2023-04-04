import React from "react";

function Textfields(props) {
  const getInputValue = function (e) {
    const setState = props.stateValue;
    setState(e.target.value);
  };
  return (
    <div className="text-field-container">
      <label className="text-field-label" htmlFor="textfield">
        {props.name}
      </label>
      <input
        className="text-field"
        id="textfield"
        placeholder={props.placeholder}
        type="text"
        onChange={getInputValue}
        value={props.value}
        disabled={props.disabled}
        readOnly={props.disabled}
      />
    </div>
  );
}

export default Textfields;
