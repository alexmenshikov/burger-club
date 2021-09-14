'use strict'

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const concatCss = require('gulp-concat-css');

sass.compiler = require('node-sass');

exports.sass = function () {
  return src('./sass/main.scss')
      .pipe(sass())
      .pipe(concatCss('main.css'))
      .pipe(cssmin())
      .pipe(rename({suffix: '.min'}))
      .pipe(dest('./css'));
};

exports.default = function () {
  watch('./sass/*.scss', series('sass'));
};