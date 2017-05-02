var gulp = require('gulp')
var tasks = require('./gulp/')

/* @gulp: default */
gulp.task('default', ['bower', 'assets', 'js', 'styles', 'php', 'watch'], tasks.BSync)

/* @gulp: javascript */
gulp.task('js', tasks.Javascript)

/* @gulp: bower */
gulp.task('bower', tasks.Bower)

/* @gulp: assets */
gulp.task('assets', tasks.Assets)

/* @gulp: dist */
gulp.task('php', tasks.Php)

/* @gulp: styles */
gulp.task('styles', tasks.Styles)

/* @gulp: watch */
gulp.task('watch', tasks.Watch)
