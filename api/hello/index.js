module.exports = async function (context, req) {
  context.res = {
    status: 200,
    body: {
      success: true,
      message: "Hello from Patrick's Azure API!"
    }
  };
};