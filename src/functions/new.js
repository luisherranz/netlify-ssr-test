exports.handler = (event, context, callback) => {
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: "hi from functions :wave:"
    });
  }, 3000);
};
