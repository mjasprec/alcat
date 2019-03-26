var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create();

gulp.task('default', function(done){
  done();
});

gulp.task('html', function(done){
  console.log("HTML changes save");
  if(done)done();
})

gulp.task('styles', function(){
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(done){
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', ['html'],function(){
    browserSync.reload(); 
    
  })
  watch('./app/assets/styles/**/*.css', ['styles'], function(){

  });

  if(done)done();
})