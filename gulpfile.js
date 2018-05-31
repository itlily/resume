var gulp = require('gulp')
var jade = require('gulp-jade');
gulp.task("jade", function(event) {
  return gulp.src('src/*.jade')
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('/'))
});
gulp.task("default", ["jade"]);