const { GoogleGenAI } = require("@google/genai");

module.exports = async function (context, req) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    context.res = {
      status: 200,
      body: {
        sdkLoaded: !!ai,
      },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: {
        error: error.message,
      },
    };
  }
};