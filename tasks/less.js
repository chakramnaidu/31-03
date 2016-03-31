var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../gulp.config')();

gulp.task('less', function () {
    return gulp.src(config.assetsPath.less + '**/*.less')
        .pipe(less())
        .pipe(gulp.dest(config.assetsPath.css));;
});

gulp.task('watch-less', function () {
    gulp.watch(config.assetsPath.less + '**/*.less', ['less']);
});
