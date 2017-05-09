var gulp = require('gulp')
var tasks = require('./gulp/')

/* @gulp: default */
gulp.task('default', ['bower', 'assets', 'js', 'style', 'php', 'watch'], tasks.BSync)

/* @gulp: javascript */
gulp.task('js', tasks.Js)

/* @gulp: bower */
gulp.task('bower', tasks.Bower)

/* @gulp: assets */
gulp.task('assets', tasks.Assets)

/* @gulp: dist */
gulp.task('php', tasks.Php)

/* @gulp: styles */
gulp.task('style', tasks.Style)

/* @gulp: watch */
gulp.task('watch', tasks.Watch)
