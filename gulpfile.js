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
	return gulp.src('img/*')
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			optimizationLevel: 3,
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
		.pipe(concat('prefmatters.js'))
		.pipe(gulp.dest('production'))
		.pipe(rename('prefmatters.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('production'));
});


//Inline render blocking CSS
gulp.task('critical', function (cb) {
	critical.generate({
		base: './',
		src: 'index.html',
		css: ['css/style.css'],
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
		dest: '../production/css',
		minify: true,
		extract: false,
		inline: true
	});
});


//Watch files
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint', 'scripts']);
});

//Default task to run
gulp.task('default', ['lint', 'scripts', 'watch', 'imagemin', 'critical']);

