const glob = require('glob-promise');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const responsive = require('gulp-responsive');

let images = false;

module.exports = () => {
  function processImages() {
    return glob('./src/fonts/**/*.@(otf)').then(paths => (
      new Promise((resolve) => {
        if (paths.length > 0) images = true;
        gulp.src('./src/images/**/*.@(otf)')
          .pipe(gulp.dest('./dist/fonts'))
          .on('end', () => {
            resolve();
          });
      })
    ));
  }

  return processImages();
};
