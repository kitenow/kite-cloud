'use strict';

function get(userId) {
  return {
    body: { id: userId, name: "test" }
  };
}

function post(userId, header, body) {
  return {
    body: { id: userId, header: header, body: body }
  };
}

const routeMap = {
  '/': {
    'GET': (event, context) => {
      let  result = {"event" : event, "context" : context}
      return result;
    }
  },
  '/hello/{userId}': {
    'GET': (event, context) => {
      const userId = event.params.path.userId;
      return get(userId);
    },
    'POST': (event, context) => {
      const userId = event.params.path.userId;
      const body = JSON.stringify(event["body-json"]);
      const header =  event.params.header;
      return post(userId, header, body);
    }
  }
};

function router(event, context) {
  const controller = routeMap[event.context["resource-path"]][event.context["http-method"]];

  // https://devstarsj.github.io/cloud/2016/11/22/Lambda+APIGateway.02.Route/

  if(!controller) {
    return {
      body: { Error: "Invalid Path" }
    };
  }

  return controller(event, context);
}

module.exports.hello = async (event, context, callback) => {
  let result = router(event, context);
  callback(null, result);
};
