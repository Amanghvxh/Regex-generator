import languagesArray from "./languages";
const searchLanguage = function (e) {
  if (!e.target.value) {
    return [];
  }
  const resultLangArray = languagesArray.filter((lang) => {
    if (lang.toLowerCase().includes(e.target.value.toLowerCase())) {
      return lang;
    }
  });
  return resultLangArray;
};

export default searchLanguage;
