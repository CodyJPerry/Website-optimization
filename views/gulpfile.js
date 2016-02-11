// require plugins
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var critical = require('critical');


 

 //Imagemin task for .png files
gulp.task('imagemin', () => {
	return gulp.src('images/*')
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 7,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('production/images'));
});

//Lint task
gulp.task('lint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});



//Concatenate & Minify js
gulp.task('scripts', function() {
	return gulp.src('js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('production'));
});


//Inline render blocking CSS
gulp.task('critical', function (cb) {
	critical.generate({
		base: '../views/',
		src: 'pizza.html',
		css: ['../views/css/style.min.css'],
		dimensions: [{
			width: 320,
			height: 480,
		},{
			width: 768,
			height: 1024
		},{
			width: 1280,
			height: 960
		}],
		dest: 'views/production/css/',
		minify: true,
		extract: false
	});
});


//Watch files
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint', 'scripts']);
});

//Default task to run
gulp.task('default', ['lint', 'scripts', 'watch', 'imagemin', 'critical']);

