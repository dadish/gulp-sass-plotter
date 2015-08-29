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
var plotter = require('gulp-sass-plotter');

gulp.watch('path/to/sass/files/')
  .pipe(plotter(options))
  .pipe(dest('path/to/css/dir/'));
```
This will pass all the file through and also will stream all dependent files
of the .scss files.

#### options

Options are those of [sass-import-resolve][import-resolve]. You could save some cpu 
by passing ```resolveSass : false```. This will not look for files with `.sass`
extension, only `.scss` files. See [sass-import-resolve][import-resolve] for more info.


[plotter]: https://npmjs.org/package/sass-plotter/
[import-resolve]: https://npmjs.org/package/sass-import-resolve/
[npm]: https://npmjs.org