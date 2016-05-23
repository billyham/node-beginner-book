
function route(handle, path, response, request) {

  if (typeof handle[path] === 'function') {

    handle[path](response, request);

  }else{

    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('404 Not found');
    response.end();
  }
}

exports.route = route;
