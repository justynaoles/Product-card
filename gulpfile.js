const { watch, src, dest, series, parallel } = require('gulp');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');



const config = {
    app: {
        js: [
            './src/js/*.js',
        ],
        scss: './src/scss/*.scss',
        style: './src/scss/style.scss',
        html: './*.html'
    },
    dist: {
        base: './dist/',
        css: './dist/css',
        js: './dist/js',
        style: './dist/css/style.css'
    }
}



function liveLoad(done){

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    done();
  }

function css(done){

    src(config.app.style)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({debug: true}, (details) => {
    console.log(`${details.name}: ${details.stats.originalSize}`);
    console.log(`${details.name}: ${details.stats.minifiedSize}`);
    }))
    .pipe(dest(config.dist.css));

    done();
}

function scripts(done) {

    src(config.app.js)
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(config.dist.js))

    done();
}


function reload (done) {
    browserSync.reload();
    done();
}

  function watchFiles() {

    watch(config.app.scss, series(css, reload));
    watch(config.app.js, series(scripts, reload));
    watch(config.app.html, reload);
}


exports.default = parallel(watchFiles, liveLoad);