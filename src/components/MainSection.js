import React from "react";
import Textfields from "./Textfields";
import generateRegex from "../controllers/generateRegex";
import Language from "./Language";
import SearchBar from "./SearchBar";

function MainSection() {
  const [inputCharValue, setInputCharValue] = React.useState("");
  const [inputRegexValue, setRegexValue] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [generatedRegex, setGeneratedRegexValue] = React.useState("");

  return (
    <section className="mainsection">
      <div className="listContainer"></div>
      <div className="regex-generator">
        <SearchBar setState={setLanguage} />
        <Language setState={setLanguage} value={language} />
        <Textfields
          name={"Input text"}
          stateValue={setInputCharValue}
          placeholder={"Your Input text"}
        />
        <Textfields
          name={"REGEX text"}
          placeholder={"Input String that you want REGEX for"}
          stateValue={setRegexValue}
        />
        <Textfields
          name={"Generated REGEX"}
          value={generatedRegex}
          placeholder={"Your REGEX"}
          disabled={true}
        />
        <input
          className="generateButton"
          type="button"
          name="GenerateButton"
          value="Generate REGEX"
          onClick={() =>
            generateRegex(
              inputCharValue,
              inputRegexValue,
              language,
              setGeneratedRegexValue
            )
          }
        />
      </div>
    </section>
  );
}
export default MainSection;
