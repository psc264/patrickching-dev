const { GoogleGenAI } = require("@google/genai");

module.exports = async function (context, req) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: "Say hello to Patrick in one sentence.",
    });

    context.res = {
      status: 200,
      body: {
        success: true,
        answer: response.text,
      },
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: {
        success: false,
        error: error.message,
      },
    };
  }
};