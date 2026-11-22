const { GoogleGenAI } = require("@google/genai");

module.exports = async function (context, req) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    let response;
    let lastError;

    for (let attempt = 1; attempt <= 5; attempt++) {
      try {
        response = await ai.models.generateContent({
          model: "gemini-3.8-flash",
          contents: "Reply with exactly: Gemini Azure test successful",
        });

        break;
      } catch (error) {
        lastError = error;

        if (attempt < 5) {
          await new Promise(resolve =>
            setTimeout(resolve, attempt * 3000)
          );
        }
      }
    }

    if (!response) {
      throw lastError;
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
        details: JSON.stringify(error),
      },
    };
  }
};