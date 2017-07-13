import gulp from 'gulp';
import babel from 'gulp-babel';
import watch from 'gulp-watch';
import plumber from 'gulp-plumber';
import jest from 'gulp-jest';

const path = {
  src: {
    js: ['src/algorithms/sort/*.js', 'src/data-structures/*.js'],
  },
  dist: {
    js: 'dist',
  },
};

gulp.task('6to5', () => {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(babel())
    .pipe(plumber.stop())
    .pipe(gulp.dest(path.dist.js));
});

gulp.task('jest', () => {
  gulp.src('__tests__')
    .pipe(jest());
});

gulp.task('watch', ['6to5'], () => {
  gulp.watch([path.src.js], [babel]);
});

gulp.task('default', ['watch', 'jest']);
