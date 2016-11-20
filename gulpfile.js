var sass = require('gulp-sass');
var gulp = require('gulp');

var usemin = require('gulp-usemin');

var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');

var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var browserSync = require('browser-sync').create();

gulp.task('lint', function () {
    return gulp.src('./app/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('usemin', function() {
  return gulp.src('./app/index.html')
    .pipe(usemin())
    .pipe(gulp.dest('dist/'));
});

//gulp.task('scss', function () {
//    gulp.src('./app/**/*.css')
//        .pipe(sass().on('error', sass.logError))
//        .pipe(gulp.dest('./dist/'));
//});

gulp.task('css', function(){
    gulp.src('./app/css/*.css')
        .pipe(cssmin())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function () {
    return gulp.src('./app/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy', function () {
    gulp.src(['./app/*.html', './app/**/*.otf'])
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build',['scripts', 'css', 'copy', 'usemin'], function(){
    console.log('Build complete');
});

gulp.task('browser-sync', ['build'], function(){
    browserSync.init({
        server:{
            baseDir: "./dist",
            routes:{
                "/bower_components" : "bower_components",
            }
        },
        browser: "google-chrome"
    });
});

gulp.task('default', ['browser-sync'], function(){
    gulp.watch("./app/**/*.*", ['build']);
    gulp.watch("./dist/**/*.*").on("change", browserSync.reload);
});