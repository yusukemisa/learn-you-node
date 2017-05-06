var http = require('http');
var url = require('url');
var strftime = require('strftime');

var server = http.createServer(function(request, response){
  var srvUrl = url.parse(request.url, true);
  var parseDate = new Date(srvUrl.query.iso);
  //console.log(srvUrl);
  if (srvUrl.pathname === '/api/parsetime'){
    var ret = {
      "hour": parseDate.getHours(),
      "minute": parseDate.getMinutes(),
      "second": parseDate.getSeconds()
    };
    //response.end(JSON.stringify(ret));
    //console.log(JSON.stringify(ret));
  }
  if (srvUrl.pathname === '/api/unixtime'){
  //  var date = new Date();
    var ret = { "unixtime": parseDate.getTime() };
    //console.log(date.getTime());

  }
  //console.log(srvUrl);
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(ret));
});
server.listen(Number(process.argv[2]));
