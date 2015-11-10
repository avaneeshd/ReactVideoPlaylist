var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');
var nodemon = require('gulp-nodemon');
var concat = require('gulp-concat');
var reactify = require('reactify');
var fs = require("fs");

gulp.task('build', function () {
	return browserify({entries: './src/app.js', debug: false})
		.transform(babelify, {presets: ["es2015", "react"]})
		.transform(reactify, {harmony:true, es6module:true})
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

gulp.task('build-css', function(){
	return gulp.src('src/**/*.css')
			.pipe(concat('style.css'))
			.pipe(gulp.dest('build/public'));
});

gulp.task('watch', ['build', 'build-server', 'build-css'], function () {
	console.log("Starting server");
	fs.stat('build/server/server.js', function(err, stat) {
		if(err == null) {
			nodemon({
				script: 'build/server/server.js'
				, env: { 'NODE_ENV': 'development' }
			})
		}
	});
});

gulp.task('default', ['watch']);