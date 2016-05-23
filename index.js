var router = require('./router');
var server = require('./server');
var requestHandlers = require('./requestHandlers');

var handlerFunctions = {};

handlerFunctions['/'] = requestHandlers.start;

handlerFunctions['/start'] = requestHandlers.start;

handlerFunctions['/show'] = requestHandlers.show;

handlerFunctions['/upload'] = requestHandlers.upload;


server.start(router.route, handlerFunctions);
