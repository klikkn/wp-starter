var gulp = require('gulp')
var tasks = require('./gulp/')

/* @gulp: default */
gulp.task('default', ['bower', 'assets', 'js', 'styles', 'template', 'watch'], tasks.BSync)

/* @gulp: javascript */
gulp.task('js', tasks.Javascript)

/* @gulp: bower */
gulp.task('bower', tasks.Bower)

/* @gulp: assets */
gulp.task('assets', tasks.Assets)

/* @gulp: dist */
gulp.task('template', tasks.Template)

/* @gulp: styles */
gulp.task('styles', tasks.Styles)

/* @gulp: watch */
gulp.task('watch', tasks.Watch)
