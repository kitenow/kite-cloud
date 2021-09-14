"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: 'Hello from Lambda Serverless V1'
  };
};
