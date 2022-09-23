import { basename, resolve } from 'path';
const root = basename(resolve());

const dirDist = './dist';
const dirSrc = './src';

export const path = {
  root,
  build: {
    html: dirDist,
    css: dirDist,
    js: dirDist,
    img: `${dirDist}/img/`,
    fonts: `${dirDist}/fonts/`
  },
  src: {
    html: `${dirSrc}/index.html`,
    scss: `${dirSrc}/styles/main.scss`,
    js: `${dirSrc}/scripts/app.js`,
    img: `${dirSrc}/img/**/*.{jpeg,jpg,png,gif,webp,ico}`,
    svg: `${dirSrc}/img/**/*.svg`,
    fonts: `${dirSrc}/fonts/*.*`
  },
  watch: {
    html: `${dirSrc}/**/*.html`,
    scss: `${dirSrc}/styles/**/*.scss`,
    js: `${dirDist}/scripts/**/*.js`,
    img: `${dirSrc}/img/**/*.{jpeg,jpg,png,gif,webp,svg,ico}`
  },
  clean: dirDist,
  dirDist,
  dirSrc,
}
