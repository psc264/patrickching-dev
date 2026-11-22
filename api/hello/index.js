module.exports = async function (context, req) {
  const name = req.query.name || "friend";

  context.res = {
    status: 200,
    body: {
      success: true,
      message: `Hello ${name}!`
    }
  };
};