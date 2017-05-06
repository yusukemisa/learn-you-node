var http = require('http');
var bl = require('bl');


function getContents(i) {
  http.get(process.argv[i],function(response) {
    response.pipe(bl(function(err,data) {
      if(err) return console.error(err);
      console.log(data.toString());
      if(i<4) getContents(i+1);
    }));
  }).on('err',console.error);
}

getContents(2);
