var fs = require('fs');
fs.createReadStream(process.argv[3],function(err,data){
  if(err) return console.error(err);
  console.log(data);
});
