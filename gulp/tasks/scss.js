import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import ggsmq from 'gulp-group-css-media-queries';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass)

export const scss = () => {
  return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(app.plugins.notify.onError({
        title: 'SCSS',
        message: 'Error: <%= error.message %>'
      }))
    )
    .pipe(app.plugins.replace('@img/', '../img/'))
    .pipe(sass())
    .pipe(app.plugins.if(app.isBuild, ggsmq()))
    .pipe(app.plugins.if(
      app.isBuild,
      autoprefixer({
        grid: true,
        overrideBrowserslist: ['last 3 versions'],
        cascade: true
      })
    ))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.if(app.isBuild, cleanCSS()))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.browserSync.stream())
};
