var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

var src_sass = ['theme/**/*.sass', 'blocks/**/*.sass'];

// gulp.task('styles', function() {
//     gulp.src(src_sass)
//         .pipe(sass().on('error', sass.logError))
//         .pipe(concat('home.css'))
//         .pipe(gulp.dest('./css'));
// });

gulp.task('styles', function() {
    gulp.src(src_sass)
        .pipe(concat('home.sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch(src_sass, ['styles']);
});
