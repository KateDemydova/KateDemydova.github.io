const { task, series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const replace = require('gulp-replace');
const dc = require('postcss-discard-comments');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const csscomb = require('gulp-csscomb');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const sortCSSmq = require('sort-css-media-queries');
const pug = require('gulp-pug');
const tailwindcss = require('tailwindcss');

const PATH = {
  scssFolder: './src/scss/',
  scssAllFiles: './src/scss/**/*.scss',
  scssRootFile: './src/scss/style.scss',
  pugFolder: './src/templates/',
  pugAllFiles: './src/templates/**/*.pug',
  pugRootFile: './src/templates/index.pug',
  cssFolder: './assets/css/',
  cssAllFiles: './assets/css/*.css',
  cssRootFile: './assets/css/style.css',
  htmlFolder: './',
  htmlAllFiles: './*.html',
  jsFolder: './assets/js/',
  jsAllFiles: './assets/js/**/*.js',
  imgFolder: './assets/images/'
};

const PLUGINS = [
  dc({ discardComments: true }),
  autoprefixer({
    overrideBrowserslist: ['last 5 versions', '> 0.1%'],
    cascade: true
  }),
  mqpacker({ sort: sortCSSmq })
];

// Компиляция SCSS в CSS
function compileScss() {
  return src(PATH.scssRootFile)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(PLUGINS))
    .pipe(dest(PATH.cssFolder))
    .pipe(browserSync.stream());
}

// Компиляция Pug в HTML
function compilePug() {
  return src(PATH.pugRootFile)
    .pipe(pug({ pretty: true }))
    .pipe(dest(PATH.htmlFolder))
    .pipe(browserSync.stream());
}

// Компиляция Tailwind
function compileTailwind() {
  return src('./src/input.css')
    .pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer()]))
    .pipe(dest(PATH.cssFolder))
    .pipe(browserSync.stream());
}


// Инициализация сервера
function serverInit() {
  browserSync({
    server: { baseDir: './' },
    notify: false
  });
}

// Перезагрузка сервера
async function sync() {
  browserSync.reload();
}

// Наблюдение за файлами
function watchFiles() {
  serverInit();

  // Наблюдение за Tailwind
  watch('./src/input.css', series(compileTailwind));

  // Наблюдение за SCSS
  watch(PATH.scssAllFiles, series(compileScss));

  // Наблюдение за HTML и Pug
  watch(PATH.htmlAllFiles, sync);
  watch(PATH.pugAllFiles, series(compilePug, sync));

  // Наблюдение за JavaScript
  watch(PATH.jsAllFiles, sync);
}

// Экспорт задач
task('scss', compileScss);
task('pug', compilePug);
task('tailwind', series(compileTailwind));
task('watch', watchFiles);
