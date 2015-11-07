var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');

gulp.task('build', function () {
	return browserify({entries: './src/app.js', extensions: ['.js'], debug: true})
		.transform(babelify, {presets: ["es2015", "react"]})
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('build/public'));
});

gulp.task('build-server', function(){
	return gulp.src('src/**/*.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('build'));
});

gulp.task('start', function () {
	console.log("Starting server");
	nodemon({
		script: 'build/server/server.js'
		, env: { 'NODE_ENV': 'development' }
	})
});

gulp.task('watch', ['build', 'build-server', 'start'], function () {
	gulp.watch('*.js', ['start']);
});

gulp.task('default', ['watch']);