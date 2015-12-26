var gulp = require('gulp');
var merge = require('merge2');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var shell = require('gulp-shell')

var tsProject = ts.createProject({
  typescript: require('typescript'),
  noExternalResolve: true,
  declarationFiles: false,
  module: "commonjs"
});

gulp.task('build.backend.js', function() {
  var tsResult = gulp.src([
      'backend/src/*.ts',
      'backend/src/**/*.ts',
      'backend/typings/**/*.ts'
    ])
    .pipe(ts(tsProject));

  // Merge the two output streams, so this task is finished when the IO of both operations are done.
  return merge([
    tsResult.js.pipe(gulp.dest('backend/app'))
  ]);
});

gulp.task('watch', function() {
  gulp.watch(['backend/src/*.ts','backend/src/**/*.ts'], ['build.backend.js']);
});

gulp.task('nodemon', function() {
  nodemon({
      script: 'backend/app/server.js',
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
