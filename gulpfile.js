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

// Путь до темы на локольном хосте
var path_to_theme = '';

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        js: path_to_theme + '/js/',
        css: path_to_theme + '/css/',
        theme: path_to_theme + '/',
        img: path_to_theme + '/img/',
        fonts: path_to_theme + '/fonts/'
    },
    src: { //Пути откуда брать исходники
        js: 'src/js/main.js',
        style: 'src/style/main.less',
        theme: path_to_theme + '/theme/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.less',
        theme: path_to_theme + '/theme/**/*.*',
        img: 'src/img/**/*.*',
        fonts: 'src/fonts/**/*.*'
    }
};

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
    gulp.src(path.src.js)
        .pipe(plumber())
        .pipe(rigger())
        .pipe(uglify())
        .pipe(gulp.dest(path.build.js));
});

gulp.task('style', function() {
    gulp.src(path.src.style)
        .pipe(plumber())
        .pipe(less_import('main.less'))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(gulp.dest(path.build.css));
});

gulp.task('images', function() {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img));
});

gulp.task('fonts', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('theme', function() {
    gulp.src(path.src.theme)
        .pipe(gulp.dest(path.build.theme));
});

gulp.task('build', [
    'vendors-css',
    'vendors-js',
    'js',
    'style',
    'theme'
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

gulp.task('default', ['build', 'watch']);
