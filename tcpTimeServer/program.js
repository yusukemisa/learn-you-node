var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function(socket){
  var d = new Date();
  socket.end(strftime('%Y-%m-%d %H:%M', d) + "\n");
});

server.listen(Number(process.argv[2]));

//pwdconsole.log(process.argv);
