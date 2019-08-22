exports.handler = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: "hi from functions"
  });
};
