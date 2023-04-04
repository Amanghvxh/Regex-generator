import React from "react";

function Options(props) {
  return (
    <option className="languageList" value={props.language}>
      {props.language}
    </option>
  );
}

export default Options;
