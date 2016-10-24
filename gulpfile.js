// loading in dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');

// gulp nodemon task
gulp.task('start', () => {
  nodemon({
    script: './bin/www'
  })
})

// sass task
gulp.task('sass', () => {

  gulp.src('./public/style/sass/style.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  })).on('error', sass.logError)
  .pipe(gulp.dest('./public/style/css'))

})

// sass watch task
gulp.task('watch', () => {
  gulp.watch('./public/style/sass/**/*.scss', ['sass'])
})

// default task to run all tasks when typing gulp into the terminal
gulp.task('default', ['start', 'sass', 'watch'])
