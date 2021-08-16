"use strict";
const dbModule = require("./module/pg_module");
const redisModule = require("./module/redis_module");
const httpModule = require("./module/http_module");

module.exports.hello = async (event, context, callback) => {
  const httpResult = await httpModule.getUsersByHttp();
  console.log("3. HTTP RESULT");
  if (httpResult) {
    httpResult.forEach((user) => {
      console.log(
        "id = %d, name = %s, email = %s",
        user.id,
        user.name,
        user.email
      );
    });
  }

  const redisResult = await redisModule.setGetByRedis();
  console.log("1. REDIS RESULT");
  console.log(redisResult);

  const [redisRet, pgRet, httpRet] = await Promise.all([
    redisModule.setGetByRedis(),
    dbModule.getCommentByDB(),
    httpModule.getUsersByHttp(),
  ]);
  console.log("11. REDIS RET");
  console.log(redisRet);

  console.log("33. HTTP RET");
  if (httpRet) {
    httpRet.forEach((user) => {
      console.log(
        "id = %d, name = %s, email = %s",
        user.id,
        user.name,
        user.email
      );
    });
  }

  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header': 'My Header Value',
    },
    body: JSON.stringify(httpRet),
  };
  callback(null, response); 
};
