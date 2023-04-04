require("dotenv").config();
const axios = require("axios");

const generateRegex = async function (req, res) {
  const { chracterToRemove, stringToRemoveFrom, language } = req.body;

  try {
    const messages = [
      {
        role: "system",
        content: `You are a professional REGEX generator.  JUST GENERATE THE REGEX, DONT EXPLAIN IT!`,
      },
      {
        role: "user",
        content: `generate a ${language} regex without its explanation to remove ${chracterToRemove} from ${stringToRemoveFrom} `,
      },
    ];
    const apiEndPoint = "https://api.openai.com/v1/chat/completions";

    const reqBody = {
      model: "gpt-3.5-turbo",
      messages: messages,
    };
    const reqHeaders = {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
    };

    const response = await axios.post(apiEndPoint, reqBody, {
      headers: reqHeaders,
    });

    return res.json({
      success: true,
      data: response.data.choices[0].message.content,
    });
  } catch (error) {}
};

module.exports = generateRegex;
