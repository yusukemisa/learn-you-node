//var ext = "." + args[3];
//module.exports =
module.exports = function (dirname,ext,callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dirname,function(err,data){
    if (err) {
      callback(err);
      return;
    }
    callback(null, data.filter(function(item) {
      return path.extname(item) === '.' + ext
    }));
  });
};
//module.exports = Myfilter;
