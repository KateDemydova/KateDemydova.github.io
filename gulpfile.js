const { src, dest, watch, task, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano')
const rename = require('gulp-rename')
const postcss = require('gulp-postcss' )
const csscomb = require('gulp-csscomb')
const autoprefixer = require('autoprefixer')
const mqpacker = require('css-mqpacker' )
const sortCSSmq = require('sort-css-media-queries' )
const pug = require('gulp-pug')
const sourcemaps = require('gulp-sourcemaps');

const PATH = {
  scssRootFolder: './assets/scss',
  scssRoot: './assets/src/scss/style.scss',
  scssAllFiles: './assets/src/**/*.scss',
  cssRoot: './assets/css',
  htmlAllFiles: './*.html',
  jsAllFiles: './**/*.js',
  pugRootFile: './assets/src/templates/*.pug',
  pugFolder: './assets/dist'
}

const PLUGINS = [
  autoprefixer({
    overrideBrowserslist : ['last 5 versions '],
    cascade: true
  }),
  mqpacker({ sort: sortCSSmq })
]

function copyNormalize() {
  return src('node_modules/normalize.css/normalize.css')
    .pipe(dest('assets/src/scss/'));
}

function scss() {
  return src(PATH.scssRoot)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(PLUGINS))
    .pipe(dest(PATH.cssRoot))
    .pipe(browserSync.stream());

}

function scssDev() {
  const pluginsForDevMode = [...PLUGINS]
  pluginsForDevMode.splice(0,1)

  return src(PATH.scssRoot)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(pluginsForDevMode))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(PATH.cssRoot, { sourcemaps: true }))
    .pipe(browserSync.stream());

}
function scssMin() {
  const pluginsForMinified = [...PLUGINS, cssnano()]
  return src(PATH.scssRoot)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(pluginsForMinified))
    .pipe(rename({suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(PATH.cssRoot))
    .pipe(browserSync.stream());

}

function comb() {
  return src(PATH.scssAllFiles).pipe(csscomb()).pipe(dest(PATH.scssRootFolder))
}
function server() {
  browserSync.init({
    server: "./"
  })
}

async function reload() {
  await browserSync.reload();
}
function watchFiles() {
  server();
  watch(PATH.scssAllFiles, series(scss, scssMin))
  watch(PATH.htmlAllFiles, reload)
  watch(PATH.jsAllFiles, reload)
}

function compilePug() {
  return src(PATH.pugRootFile)
    .pipe(pug({ pretty: true }))
    .pipe(dest(PATH.pugFolder))
}

task('copyNormalize', copyNormalize);
task('comb', comb)
task('scss', series(scss, scssMin))
task('scssDev', scssDev)
task('styles', scss)
task('scssMin', scssMin)
task('watch', watchFiles)
task('pug', compilePug)
task('build', series(scss, scssMin));