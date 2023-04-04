import axios from "axios";
const generateRegex = async function (
  inputCharValue,
  inputRegexValue,
  language,
  setGeneratedRegexValue
) {
  try {
    const reqBody = {
      chracterToRemove: inputCharValue,
      stringToRemoveFrom: inputRegexValue,
      language: language,
    };
    const { data } = await axios.post(
      "https://adorable-pig-costume.cyclic.app",
      reqBody
    );
    const regex = data.data.match(/\/(.*)\/([a-z]*)/);

    setGeneratedRegexValue(regex[0] ?? data.data);
  } catch (error) {}
};

export default generateRegex;
