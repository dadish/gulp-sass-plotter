var SassPlotter               = require('sass-plotter');
var through                   = require('through');
var path                      = require('path');
var vinylFile                 = require('vinyl-file');

var plotter = new SassPlotter();
var options = {};

function write (data) {

  if (path.extname(data.path) !== '.scss') return this.queue(data);

  if (data.event === 'unlink') {
    plotter.unset(data.path);
  } else {
    plotter.set(data.path, data.contents.toString(), options);
  }

  plotter.dependents(data.path).forEach(function (item) {
    this.queue(vinylFile.readSync(item));
  }, this);
}

module.exports = function (setting) {
  options = setting;
  return through(write);
}