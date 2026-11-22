const { GoogleGenAI } = require("@google/genai");

module.exports = async function (context, req) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    let response;

    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: "Say hello to Patrick in one sentence.",
        });

        break;
      } catch (error) {
        if (attempt === 3) {
          throw error;
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

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