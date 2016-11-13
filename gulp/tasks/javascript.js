import gulp from 'gulp'
import path from 'path'
import gulpif from 'gulp-if'
import uglify from 'gulp-uglify'
import plumber from 'gulp-plumber'
import webpackStream from 'webpack-stream'
import AssetsPlugin from 'assets-webpack-plugin'
import notify from 'gulp-notify'
import bs from 'browser-sync'

import { DIST_PATH, DEV, ENTRIES, WATCH } from '../const'

/* def: webpack options */
let options = {
    devtool: DEV ? 'eval' : null,
    watch: WATCH,
    output: {
        publicPath: '/js/',
        filename: 'bootstrap.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    plugins: [
        new webpackStream.webpack.NoErrorsPlugin()
    ],
    module: {
        preLoaders: [],
        loaders: [{
            test: /\.json?$/,
            exclude: /(node_modules)/,
            loader: 'json'
        }, {
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0'],
                plugins: [
                    'add-module-exports'
                ]
            }
        }]
    }
}

export default () => {
    gulp.src(ENTRIES.app)
        .pipe(plumber())
        .pipe(webpackStream(options))
        .pipe(gulpif(!DEV, uglify()))
        .pipe(gulp.dest(path.join(DIST_PATH, 'js')))
        .pipe(notify({ message: 'js complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
