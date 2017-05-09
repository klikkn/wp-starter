var gulp = require('gulp')
var path = require('path')
var concat = require('gulp-concat')
var bowerFiles = require('main-bower-files')
var filter = require('gulp-filter')
var cssnano = require('gulp-cssnano')
var merge = require('merge-stream')
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify')

var consts = require('../const')

module.exports = function () {
  var js = filter('**/*.js', { restore: true });
  var css = filter('**/*.css', { restore: true });

  return merge(
    gulp.src(bowerFiles())
    .pipe(js)
    .pipe(concat('bundle.js'))
    .pipe(gulpif(!consts.DEV, uglify()))
    .pipe(gulp.dest(path.join(consts.DIST_PATH, 'js'))),

    gulp.src(bowerFiles())
    .pipe(css)
    .pipe(concat('bundle.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(path.join(consts.DIST_PATH, 'css')))
  )
}
