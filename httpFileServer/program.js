var http = require('http');
var fs = require('fs');
//console.log(process.argv);
var server = http.createServer(function(request, response){
  response.writeHead(200, {'contentType': 'text/plain'});
  var obj = fs.createReadStream(process.argv[3]);
  obj.pipe(response);
});
server.listen(Number(process.argv[2]));
