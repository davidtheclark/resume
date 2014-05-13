var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var uncss = require('gulp-uncss');

gulp.task('style', function() {
  gulp.src('./scss/main.scss')
    .pipe(sass())
    .pipe(prefix(['last 3 versions', '> 1%', 'ie 8']))
    // .pipe(uncss({
    //   html: 'index.html'
    // }))
    .pipe(minifycss({keepSpecialComments: 0}))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['style']);
});
