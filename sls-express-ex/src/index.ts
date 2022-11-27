import * as serverlessExpress from "aws-serverless-express";
import { APIGatewayProxyHandler } from "aws-lambda";

import { app } from "./app";

const server = serverlessExpress.createServer(app);

export const handler: APIGatewayProxyHandler = (event, context) => {
    
    console.log("asdasd")
    
  serverlessExpress.proxy(server, event, context);
};
