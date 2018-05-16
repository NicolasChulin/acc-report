const gulp          = require('gulp');
const sass          = require('gulp-sass');
const autoprefixer  = require('gulp-autoprefixer');
const browserSync   = require('browser-sync');
const reload        = browserSync.reload;

gulp.task('sass',function(){
  gulp.src('src/static/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(gulp.dest('src/static/css'))
    .pipe(reload({stream: true}));
});

gulp.task('dev', ['sass'], function(){
  browserSync.init({
    port: 8003,
    server: {
      baseDir: 'src'
    }
  });

  gulp.watch('src/static/scss/*.scss', ['sass']);
  gulp.watch(['src/**']).on('change', reload);
});

gulp.task('default', ['dev']);
