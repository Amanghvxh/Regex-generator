const { StatusCodes } = require("http-status-codes");
let prevCharToRemove, prevStringToRemove, prevLanguage;
const CheckPrevMatch = async function (req, res, next) {
  try {
    const { chracterToRemove, stringToRemoveFrom, language } = req.body;

    if (!chracterToRemove || !stringToRemoveFrom) throw new Error();

    if (
      prevCharToRemove == chracterToRemove &&
      prevStringToRemove == stringToRemoveFrom &&
      language === prevLanguage
    )
      throw new Error();

    prevCharToRemove = chracterToRemove;
    prevStringToRemove = stringToRemoveFrom;
    prevLanguage = language;

    next();
  } catch (error) {
    // console.log(error);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, data: undefined });
  }
};

module.exports = CheckPrevMatch;
