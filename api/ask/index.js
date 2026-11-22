module.exports = async function (context, req) {
  try {
    const { GoogleGenAI } = require("@google/genai");

    context.res = {
      status: 200,
      body: {
        packageLoaded: true
      }
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: {
        error: error.message
      }
    };
  }
};