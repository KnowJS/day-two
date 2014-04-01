var concat = require('gulp-concat');
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var css = ['./bower_components/bootstrap/dist/css/bootstrap.min.css','./public/stylesheets/*.css'];

gulp.task('minify-css', function() {
  gulp.src(css)
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/build/stylesheets'));
});

var javascripts = [
	'./bower_components/jquery/dist/jquery.min.js',
	'./bower_components/bootstrap/dist/js/bootstrap.min.js',
];

gulp.task('javascript', function () {
  gulp.src(javascripts)
    .pipe(concat('bundle.js'))
		.pipe(uglify({ outSourceMap: true }))
    .pipe(gulp.dest('./public/build/javascripts'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['javascript', 'minify-css']);
