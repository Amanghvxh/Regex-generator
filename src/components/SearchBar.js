import React, { useState } from "react";
import searchLanguage from "../controllers/searchLanguage";

function SearchBar(props) {
  const [langSearchResult, setLangSearchResults] = useState([]);
  const generateResults = function (e) {
    const arr = searchLanguage(e);
    const LangSearchResults = arr.map((lang) => (
      <li className="searchResultsList" value={lang}>
        {lang}
      </li>
    ));
    setLangSearchResults(LangSearchResults);
  };
  const selectLanguage = function (e) {
    if (!e.target.closest(".searchResults")) return;
    const language = e.target.getAttribute("value");
    const setLanguage = props.setState;
    setLanguage(language);
    setLangSearchResults([]);
  };
  return (
    <div className="searchBarContainer">
      <input
        className="searchBar"
        placeholder="Search a language"
        type="search"
        onKeyUp={generateResults}
      />
      {langSearchResult.length ? (
        <ul className="searchResults" onClick={selectLanguage}>
          {langSearchResult}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchBar;
