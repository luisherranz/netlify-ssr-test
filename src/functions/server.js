exports.handler = (event, context, callback) => {
  const path = event.queryStringParameters.url;
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: "dynamic page: " + path + " : " + Math.random(),
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=300"
      }
    });
  }, 3000);
};
