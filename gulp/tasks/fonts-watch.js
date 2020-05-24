const gulp = require('gulp');
const watch = require('gulp-watch');

module.exports = () => {
  // run the task once on start
  gulp.start('fonts');

  return watch('./src/fonts/**/*.@(otf)', () => {
    gulp.start('fonts');
  });
};
