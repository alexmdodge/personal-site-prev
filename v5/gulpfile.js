var gulp = require('gulp');
var uglify = require('gulp-uglify');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

var paths = {
  styles: {
    src: 'assets/styles/styles.css',
    dest: 'export/assets/styles'
  },
  scripts: {
    src: 'scripts/**/*.js',
    dest: 'export/scripts/'
  },
  html: {
    src: 'index.html',
    dest: 'export'
  }
};

/* Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */
function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return del([ 'export/index.html', 'export/assets/**/*', 'export/scripts/**/*' ]);
}

function html() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
}

/*
 * Define our tasks using plain functions
 */
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.styles.dest));
}

// TODO: Add build tasks to move resources from img, and fonts, also compress as much
// as possible

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest));
}

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;

/*
 * Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel`
 */
var build = gulp.series(clean, gulp.parallel(html, styles, scripts));

/*
 * You can still use `gulp.task` to expose tasks
 */
gulp.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
gulp.task('default', build);
