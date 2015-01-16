var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('rewriteCss', function () {
    return gulp.src('./css-read/**/*.css')
        // 1st output
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('./css-write/'))
    
        // 2nd output
        .pipe(minifyCss())
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./css-write/'))
        ;
});
