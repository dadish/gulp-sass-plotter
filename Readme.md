gulp-sass-plotter
=================
A [sass-plottter][plotter] adapter for gulp.

### Install
Install it with [npm][npm]
```bash
$ npm install gulp-sass-plotter
```

### Usage
```js
var gulp    = require('gulp');
var watch   = require('gulp-watch');
var sass    = require('gulp-sass');
var plotter = require('gulp-sass-plotter');

 gulp.src("./test/scss/**/*.scss")
  .pipe(watch("./test/scss/**/*.scss"))
  .pipe(plotter())
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest("./css"));

```
This will pass all the file through and also will stream all dependent files
of the .scss files.

#### options
You can pass options into plotter like so...
```js
...
.pipe(plotter(options))
...
```

Options are those of [sass-import-resolve][import-resolve]. You could save some cpu 
by passing ```resolveSass : false```. This will not look for files with `.sass`
extension, only `.scss` files. See [sass-import-resolve][import-resolve] for more info.


[plotter]: https://npmjs.org/package/sass-plotter/
[import-resolve]: https://npmjs.org/package/sass-import-resolve/
[npm]: https://npmjs.org