exports.handler = (event, context, callback) => {
  setTimeout(() => {
    callback(null, {
      statusCode: 200,
      body: `Dynamic page. Path: ${event.path}. Random: ${Math.random()}`,
      headers: {
        "Cache-Control": "public, s-maxage=15, stale-while-revalidate=300"
      }
    });
  }, 3000);
};
