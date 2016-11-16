var gulp = require('gulp')
var path = require('path')
var notify = require('gulp-notify')
var concat = require('gulp-concat')
var bowerFiles = require('main-bower-files')
var filter = require('gulp-filter')
var uglify = require('gulp-uglify')
var cssnano = require('gulp-cssnano')
var merge = require('merge-stream')

var consts = require('../const')

module.exports.default = function() {
    var js = filter('**/*.js', { restore: true });
    var css = filter('**/*.css', { restore: true });
    
    return merge(
        gulp.src(bowerFiles())
        .pipe(js)
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest(path.join(consts.DIST_PATH, 'js')))
        .pipe(notify({ message: 'bower-js complete' })),

        gulp.src(bowerFiles())
        .pipe(css)
        .pipe(cssnano())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(path.join(consts.DIST_PATH, 'css')))
        .pipe(notify({ message: 'bower-css complete' }))
    )
}
