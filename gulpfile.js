var gulp = require('gulp'),
    watch = require('gulp-watch'),
    concat = require('gulp-concat'),
    cssnano = require('gulp-cssnano'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    less_import = require('gulp-less-import'),
    vendors = require('main-bower-files'),
    filter = require('gulp-filter');
bs = require('browser-sync').create();

// Путь до темы на локольном хосте
var path_to_theme = '../../local/wp-custom-pack/wp-content/themes/wp-custom';

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        js: path_to_theme + '/js/',
        css: path_to_theme + '/css/',
        theme: path_to_theme + '',
        img: path_to_theme + '/img/',
        fonts: path_to_theme + '/fonts/'
    },
    src: { //Пути откуда брать исходники
        js: 'src/js/main.js',
        style: 'src/style/main.less',
        theme: 'src/theme/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.less',
        theme: 'src/theme/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

gulp.task('browser-sync', function() {
    bs.init({
        proxy: 'wp.dev',
        logPrefix: "wp-custom",
        port: 9000
    });
});

gulp.task('vendors-js', function() {
    return gulp.src(vendors())
        .pipe(filter('**/*.js', {
            restore: true
        }))
        .pipe(plumber())
        .pipe(uglify())
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest(path.build.js))
});

gulp.task('vendors-css', function() {
    return gulp.src(vendors())
        .pipe(filter('**/*.css', {
            restore: true
        }))
        .pipe(plumber())
        .pipe(concat('vendors.css'))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest(path.build.css))
});

gulp.task('js', function() {
    return gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('style', function() {
    return gulp.src(path.src.style)
        .pipe(plumber())
        .pipe(less_import('main.less'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest(path.build.css))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('images', function() {
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('fonts', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('theme', function() {
    return gulp.src(path.src.theme)
        .pipe(gulp.dest(path.build.theme))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('build', [
    'vendors-css',
    'vendors-js',
    'js',
    'style',
    'theme',
    'fonts',
    'images'
]);

gulp.task('watch', function() {
    watch([path.watch.style], function(event, cb) {
        gulp.start('style');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js');
    });
    watch([path.watch.theme], function(event, cb) {
        gulp.start('theme');
    });
    watch([path.watch.img], function(event, cb) {
        gulp.start('images');
    });
});

gulp.task('default', ['browser-sync', 'build', 'watch']);
