gulp-sass-plotter
=================
A [sass-plottter][plotter] adapter for gulp.

### Install
Install it with [npm][npm]
```bash
$ npm install gulp-sass-plotter
```

### Usage
Basic usage
```js
var sassPlotter = require('gulp-sass-plotter');

gulp.watch('path/to/sass/files/')
  .pipe(sassPlotter())
  .pipe(dest('.'));
```
This will pass all the file through and also will stream all dependent files
of the .scss files.


[plotter]: https://npmjs.org/package/sass-plotter/
[npm]: https://npmjs.org