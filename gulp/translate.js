'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var angularTranslate = require('gulp-angular-translate');

gulp.task('translate', function() {
  return gulp.src(path.join(conf.paths.src, '/app/**/*locale-*.json'))
    .pipe(angularTranslate({language:'en'}))
    .pipe(gulp.dest(path.join(conf.paths.src, '/translations/')));
});

gulp.watch(path.join(conf.paths.src, '/app/**/*locale-*.json'), ['translate']);