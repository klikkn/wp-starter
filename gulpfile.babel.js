import gulp from 'gulp'

import { Assets, Bower, Dist, BSync, Javascript, Styles, Watch } from './gulp'

/* @gulp: default */
gulp.task('default', ['dist', 'watch'], BSync)

/* @gulp: javascript */
gulp.task('js', Javascript)

/* @gulp: bower */
gulp.task('bower', Bower)

/* @gulp: assets */
gulp.task('assets', Assets)

/* @gulp: dist */
gulp.task('dist', ['bower', 'js', 'assets', 'styles'], Dist)

/* @gulp: styles */
gulp.task('styles', Styles)

/* @gulp: watch */
gulp.task('watch', Watch)
