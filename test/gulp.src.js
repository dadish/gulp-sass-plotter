var Assert = require('assert');
var sassPlotter = require('sass-plotter');

describe('recieves stream from gulp.src and...', function () {
  
  it('streams everything that it gets further down');

  it('streams everything as a vinyl object');

  it("when .scss file is recieved streams other .scss files that depend on it");

  it("when .scss file is recieved it does not stream dependents that are not in the filesystem");

  it("when .scss file is recieved detects the event type and removes file from the plot if event type is delete/remove/unlink...");
  
});