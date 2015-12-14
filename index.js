var SassPlotter               = require('sass-plotter');
var through                   = require('through');
var path                      = require('path');
var fs                        = require('fs');

var plotter = new SassPlotter();
var options = {};

function write (file) {
  var dependentFile, fileExt, _this;

  _this = this;

  fileExt = path.extname(file.path);
  
  if (fileExt !== '.scss' && fileExt !== '.sass') return this.queue(file);

  if (file.event === 'unlink') {
    plotter.unset(file.path);
  } else {
    plotter.set(file.path, file.contents.toString(), options);
  }

  this.queue(file);
  plotter.dependents(file.path).forEach(function (item) {
    fs.readFile(item, {encoding : 'utf8'}, function (err, str) {
      if (err) throw new Error(err);
      dependentFile = file.clone();
      dependentFile.path = item;
      dependentFile.contents = new Buffer(str);
      _this.queue(dependentFile);
    });
  }, this);
}

module.exports = function (setting) {
  options = setting || options;
  return through(write);
}