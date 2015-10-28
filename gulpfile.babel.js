import gulp from 'gulp';
import babel from 'gulp-babel';

const FILES_PATH = ['!node_modules', '**/*.es6'];

gulp.task('compile', () => {
  gulp.src(FILES_PATH)
      .pipe(babel())
      .pipe(gulp.dest('.'));
});
