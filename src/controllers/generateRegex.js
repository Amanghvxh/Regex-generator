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
      "http://localhost:500/api/v1/build",
      reqBody
    );
    const regex = data.data.match(/\/(.*)\/([a-z]*)/);

    setGeneratedRegexValue(regex[0] ?? data.data);
  } catch (error) {}
};

export default generateRegex;
