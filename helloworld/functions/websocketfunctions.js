const AWS = require("aws-sdk");

const url = "https://9fs4sctfvj.execute-api.ap-southeast-1.amazonaws.com/dev"
const apig = new AWS.ApiGatewayManagementApi({
    endpoint: url
});

exports.handler = async (event, context, callback) => {
    const connectionId = event.requestContext.connectionId;
    try {
        await apig.postToConnection({
            'ConnectionId': connectionId,
            'Data': Buffer.from(JSON.stringify({message: connectionId}))
        }).promise();
    } catch (err) {
        console.error(err);
    }

    const response = {
        statusCode: 200,
        body: connectionId,
    };
    return response
};



