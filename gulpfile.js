const gulp = require('gulp')
const babel = require('gulp-babel')
const ts = require('gulp-typescript')
const del = require('del')

const env = process.env.NODE_ENV

gulp.task('clean', async function () {
  await del('lib/**')
  await del('esm/**')
})

gulp.task('cjs', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'CommonJS'
  })
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(
      babel({
        configFile: './.babelrc'
      })
    )
    .pipe(gulp.dest('lib/'))
})

gulp.task('esm', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    module: 'ESNext'
  })
  return tsProject
    .src()
    .pipe(tsProject())
    .pipe(gulp.dest('esm/'))
})

gulp.task('declaration', function () {
  const tsProject = ts.createProject('tsconfig.json', {
    declaration: true,
    emitDeclarationOnly: true
  })
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('esm/')).pipe(gulp.dest('lib/'))
})

if (process.env.NODE_ENV !== 'production') {
  gulp.watch('./src', gulp.series('clean', 'cjs', 'esm', 'declaration'))
}

exports.default = gulp.series('clean', 'cjs', 'esm', 'declaration')
