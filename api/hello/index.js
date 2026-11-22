module.exports = async function (context, req) {
  const apiKey = process.env.GEMINI_API_KEY;

  context.res = {
    status: 200,
    body: {
      hasGeminiKey: !!apiKey
    }
  };
};