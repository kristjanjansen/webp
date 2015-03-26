var gulp = require('gulp');
var webp = require('gulp-webp');
var jpegtran = require('imagemin-jpegtran');

gulp.task('jpgo', function () {
  return gulp.src('jpg/*.jpg')
    .pipe(jpegtran({progressive: true})())
    .pipe(gulp.dest('jpgo'));
});

gulp.task('webp', function () {
  return gulp.src('jpg/*.jpg')
    .pipe(webp())
    .pipe(gulp.dest('webp'));
});

gulp.task('default', function() {
    gulp.run('jpgo', 'webp');
});

