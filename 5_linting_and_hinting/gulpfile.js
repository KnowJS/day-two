var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');

gulp.task('minify-css', function() {
  gulp.src('./public/stylesheets/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/build/stylesheets'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['minify-css']);
