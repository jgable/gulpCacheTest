var gulp = require('gulp'),
    imageMin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    jshintCached = require('gulp-jshint-cached'),
    jshint = require('gulp-jshint');

gulp.task('images', function () {
    return gulp.src('imgs/**/*')
        .pipe(cache(imageMin({
            interlaced: true,
            pngquant: true,
            progressive: true
        })))
        .pipe(gulp.dest('built/imgs'));
});

gulp.task('jshint:cached', function () {
    return gulp.src('js/*.js')
        .pipe(jshintCached.cached())
        .pipe(jshintCached.reporter('default'));
});

gulp.task('jshint', function () {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('clear', function (done) {
	return cache.clearAll(done);
});