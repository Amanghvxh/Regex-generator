import React, { memo } from "react";
import Options from "./Options";
import { nanoid } from "nanoid";
import languagesArray from "../controllers/languages";
function Language(props) {
  const setLangState = function (e) {
    const { setState } = props;
    setState(e.target.value);
  };

  const languagesOptionsList = languagesArray.map((lang) => {
    return <Options key={nanoid()} language={lang} />;
  });
  return (
    <select
      className="languageList"
      value={props.value}
      onChange={setLangState}
    >
      {languagesOptionsList}
    </select>
  );
}

export default memo(Language);
