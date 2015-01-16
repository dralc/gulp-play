var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('compress', function () {
    return gulp.src('./js-read/**')
        .pipe(uglify())
        .pipe(gulp.dest('./js-write/'));
});

gulp.task('watch', function () {
    gulp.watch(['gulpfile.js', './js-read/**'], ['compress']);
});
