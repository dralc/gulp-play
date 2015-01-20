var gulp = require('gulp');
var browsersync = require('browser-sync');
var reload = browsersync.reload;

gulp.task('serve', function () {
    browsersync({
        server: {baseDir: 'serve'}
    });
});

gulp.watch('**/*', {cwd: 'serve'}, reload);