var gulp = require('gulp')
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var ts = require('gulp-typescript');

gulp.task("jade", function(event) {
  return gulp.src('src/index.jade')
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest('./'))
});
gulp.task("stylus", function(event) {
  return gulp.src('src/index.styl').pipe(stylus({
    compress: true
  })).pipe(gulp.dest('./css/'));
});

gulp.task('scripts', function () {
  return gulp.src('src/*.ts')
      .pipe(ts({
          noImplicitAny: true
      }))
      .pipe(gulp.dest('./js/'));
});
var sources = {
  jade: "src/*.jade",
  stylus: "src/*.styl",
  scripts: "src/*.ts"
};
// Watch sources for change, executa tasks
gulp.task('watch', function() {
  gulp.watch(sources.jade, ["jade"]);
  gulp.watch(sources.stylus, ["stylus"]);
  gulp.watch(sources.scripts, ["scripts"]);
});

gulp.task("default", ["jade","stylus","scripts","watch"]);