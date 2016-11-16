var gulp = require('gulp')
var notify = require('gulp-notify')
var bs = require('browser-sync')

var consts = require('../const')

module.exports.default = function() {
    return gulp.src(consts.ENTRIES.template)
        .pipe(gulp.dest(consts.DIST_PATH))
        .pipe(bs.reload({
            stream: true
        }))
}
