var gulp = require('gulp');
var merge = require('merge2');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell')

var tsProject = ts.createProject({
  typescript: require('typescript'),
  noExternalResolve: true,
  declarationFiles: false,
  target: 'es6'
});

gulp.task('build.public.js', function() {
  var tsResult = gulp.src([
      'src/public/static/**/*.ts',
      'src/public/typings/**.ts'
    ])
    .pipe(ts(tsProject));

  // Merge the two output streams, so this task is finished when the IO of both operations are done.
  return merge([
    // tsResult.dts.pipe(gulp.dest('public/typings')),
    tsResult.js.pipe(gulp.dest('public/static/'))
  ]);
});

gulp.task('watch', function() {
  gulp.watch('src/public/static/**/*.ts', ['build.public.js']);
});

gulp.task('nodemon', function() {
  nodemon({
      script: 'server.js',
      ext: 'html js'
    })
    .on('restart', function() {
      console.log('restarted!')
    })
});

gulp.task('update.npm', function(){
   return gulp.src('')
    .pipe(shell([
      'echo Start checking... It might take a few minutes',
      'node ./node_modules/npm-check-updates/lib/npm-check-updates.js'
    ]))
});

gulp.task('develop', ['watch', 'nodemon'])
