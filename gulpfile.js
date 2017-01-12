var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

//Stylus to css
gulp.task('styles', function(){
    return gulp.src('src/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('assets/css'))
});

//Scripts
gulp.task("scripts", function () {
   return gulp.src('src/scripts/*.js')
       .pipe(concat('main.js'))
       .pipe(gulp.dest('assets/js/'))
});

//Watch
gulp.task('watch', function() {
    gulp.watch('src/stylus/*.styl', ['styles']);
    gulp.watch('src/scripts/*.js', ['scripts']);
});
