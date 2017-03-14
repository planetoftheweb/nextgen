const gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  postcss = require('gulp-postcss'),
  cssnext = require('postcss-cssnext')
  gutil = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),

  source = 'process/css/',
  dest = 'builds/nextgen/';

gulp.task('html', function() {
  gulp.src(dest + '*.html');
});


gulp.task('css', function() {
  gulp.src(source + 'style.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([
    require('postcss-partial-import')({prefix: '_', extension: '.css'}),
    cssnext()
  ]))
  .on('error', gutil.log)
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest(dest + 'css'));
});

gulp.task('watch', function() {
  gulp.watch(source + '**/*.css', ['css']);
  gulp.watch(dest + '**/*.html', ['html']);
});

gulp.task('webserver', function() {
  gulp.src(dest)
    .pipe(webserver({
      livereload: true,
      port: 3000,
      open: true
    }));
});

gulp.task('default', ['html', 'css', 'webserver','watch']);
