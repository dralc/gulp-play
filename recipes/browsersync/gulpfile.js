var gulp = require('gulp');
var browsersync = require('browser-sync');
var reload = browsersync.reload;
var sass = require('gulp-sass');

// Start a server
gulp.task('serveit', function () {
    browsersync({
        server: {baseDir: 'serve'}
    });
});

// Compile and reload sass
gulp.task('reloadSass', function () {
    return gulp.src('**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('default', ['serveit'], function () {
    // Reload updated js and html files
    gulp.watch(['**/*.js', '**/*.html'], {cwd: 'serve'}, reload);
    // Reload updated scss files
    gulp.watch(['**/*.scss'], {cwd: 'serve'}, ['reloadSass']);
});

