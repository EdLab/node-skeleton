const gulp = require('gulp')
const bump = require('gulp-bump')

gulp.task('bump', function() {
  gulp.src(['./*.json'])
    .pipe(bump())
    .pipe(gulp.dest('./'))
})

gulp.task('bump-minor', function() {
  gulp.src(['./*.json'])
    .pipe(bump({
      type: 'minor',
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('bump-major', function() {
  gulp.src(['./*.json'])
    .pipe(bump({
      type: 'major',
    }))
    .pipe(gulp.dest('./'))
})
