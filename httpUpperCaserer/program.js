var http = require('http');
var map = require('through2-map');
var server = http.createServer(function(request, response){
  response.writeHead(200, {'contentType': 'text/plain'});
  request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(response);
});
server.listen(Number(process.argv[2]));
