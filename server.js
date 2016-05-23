var url = require('url');
var http = require('http');

function start(route, handle) {

  function onRequest(request, response) {

    var path = url.parse(request.url).pathname;
    route(handle, path, response, request);
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;
