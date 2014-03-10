var gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    cache = require('gulp-cache');

gulp.task('images', function () {
    return gulp.src('imgs/**/*')
        .pipe(cache(imageMin({
            interlaced: true,
            pngquant: true,
            progressive: true
        })))
        .pipe(gulp.dest('built/imgs'));
});