exports.handler = (event, context, callback) => {
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: "hi from functions :wave:",
      headers: {
        "Cache-Control": "public, s-maxage=30"
      }
    });
  }, 3000);
};
