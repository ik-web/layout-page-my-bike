import replace from 'gulp-replace';
import browserSync from 'browser-sync';
import plumber from 'gulp-plumber';
import notify  from 'gulp-notify';
import newer from 'gulp-newer';
import gulpif from 'gulp-if';

export const plugins = {
  replace,
  browserSync,
  plumber,
  notify,
  newer,
  if: gulpif
}
