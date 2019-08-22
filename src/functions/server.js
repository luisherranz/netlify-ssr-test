exports.handler = (event, context, callback) => {
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: "dynamic page: " + event.pathParameters + " : " + Math.random(),
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=300"
      }
    });
  }, 3000);
};
