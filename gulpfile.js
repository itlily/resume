var gulp = require('gulp')
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var ts = require('gulp-typescript');
var browserSync = require('browser-sync').create(); 

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

// gulp.task('browserSync', function() { // 启动Browsersync服务。这将启动一个服务器，代理服务器（proxy）或静态服务器（server） 
//   browserSync.init({ // 设置监听的文件，以gulpfile.js所在的根目录为起点，如果不在根目录要加上路径，单个文件就用字符串，多个文件就用数组 
//       files: ['*.html','css/*.css','js/*.js'], // 启动静态服务器，默认监听3000端口，设置启动时打开的index.html的路径 
//       server: { baseDir: "./" }, // 在不同浏览器上镜像点击、滚动和表单，即所有浏览器都会同步 
//       ghostMode: { clicks: true, scroll: true }, // 更改控制台日志前缀 
//       logPrefix: "learning browser-sync in gulp", // 设置监听时打开的浏览器，下面的设置会同时打开    chrome, firefox和IE 
//       browser: ["chrome"], // 设置服务器监听的端口号 
//       port: 8082 
//   }); 
// });

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
  browserSync.init({ // 设置监听的文件，以gulpfile.js所在的根目录为起点，如果不在根目录要加上路径，单个文件就用字符串，多个文件就用数组 
    files: ['*.html','css/*.css','js/*.js'], // 启动静态服务器，默认监听3000端口，设置启动时打开的index.html的路径 
    server: { baseDir: "./" }, // 在不同浏览器上镜像点击、滚动和表单，即所有浏览器都会同步 
    ghostMode: { clicks: true, scroll: true }, // 更改控制台日志前缀 
    logPrefix: "learning browser-sync in gulp", // 设置监听时打开的浏览器，下面的设置会同时打开    chrome, firefox和IE 
    browser: ["chrome"], // 设置服务器监听的端口号 
    port: 8082 
  }); 
});

gulp.task("default", ["jade","stylus","scripts","watch"]);