var gulp = require('gulp');
var browserify = require("browserify");
var vss = require('vinyl-source-stream');
//var watchify = require('watchify');

gulp.task('default', [], function () {
    //console.log(watchify.args);
    
    browserify('./js-read/1.js')
        .bundle()
        .pipe(vss('result.js'))
        .pipe(gulp.dest('./js-write'));
});
