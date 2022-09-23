import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isDev: !process.argv.includes('--build'),
  isBuild: process.argv.includes('--build'),
  gulp,
  path,
  plugins
}

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { fonts } from "./gulp/tasks/fonts.js";
import { server } from "./gulp/tasks/server.js";

const watcher = () => {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
}

const mainTasks = gulp.parallel(
  html,
  scss,
  js,
  img,
  fonts
);

export const build = gulp.series(reset, mainTasks);
export const dev = gulp.series(
  reset,
  mainTasks,
  gulp.parallel(watcher, server)
);
  
gulp.task('default', dev);
