var gulp = require('gulp')
var path = require('path')
var gulpif = require('gulp-if')
var uglify = require('gulp-uglify')
var plumber = require('gulp-plumber')
var webpackStream = require('webpack-stream')
var AssetsPlugin = require('assets-webpack-plugin')
var notify = require('gulp-notify')
var bs = require('browser-sync')

var consts = require('../const')

/* def: webpack options */
var options = {
    devtool: consts.DEV ? 'eval' : null,
    entry: consts.ENTRIES.js,
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
        }]
    }
}

module.exports.default = function() {
    gulp.src(consts.ENTRIES.js)
        .pipe(plumber())
        .pipe(webpackStream(options))
        .pipe(gulpif(!consts.DEV, uglify()))
        .pipe(gulp.dest(path.join(consts.DIST_PATH, 'js')))
        .pipe(notify({ message: 'js complete' }))
        .pipe(bs.reload({
            stream: true
        }))
}
