var gulp = require('gulp');
var ts = require('gulp-typescript');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("default", ['compile', 'watch'])

gulp.task('compile', function () {

    gulp.src(["scripts/app.ts", "scripts/**/*.ts"])
        .pipe(sourcemaps.init())
        .pipe(ts({target: "es5"}))
        .pipe(gulp.dest('build'))
});

gulp.task('watch', function () {

    gulp.watch('scripts/**/*.ts', ['compile']);
});