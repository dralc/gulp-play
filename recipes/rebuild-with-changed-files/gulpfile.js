var gulp = require('gulp');

var cached = require('gulp-cached');
var uglify = require('gulp-uglify');

var remember = require('gulp-remember');
var concat = require('gulp-concat');

gulp.task('compressJs', function () {
    var srcStream = gulp.src('./js-read/**/*.js');
    var cacheStream = cached();
    var countUnchangedFiles = 0;

    cacheStream
        .on('data', (function (dat) {
            countUnchangedFiles++;
        }))
        .on('end', function () {
            console.log(countUnchangedFiles);
        })
        .pipe(uglify())
        .pipe(gulp.dest('./js-write/'))
        
        // 2. Use all files that's passed through 'remember' plugin
        // Assumes that all files in the srcStream would have passed through at least once
        .pipe(remember())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('./js-write/'))
    ;

    // 1. Only pass through files that differ from cache for compressing
    return srcStream.pipe(cacheStream);
});

gulp.task('watch', function(){
    gulp.watch('./js-read/*.js', ['compressJs']);
});