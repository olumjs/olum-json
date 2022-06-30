const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const header = require('gulp-header');
const pkgJSON = require("./package.json");

const comment = 
`/**
* @name olum-jsonEditor
* @version ${pkgJSON.version}
* @copyright 2022
* @author Eissa Saber
* @license MIT
*/
`;

gulp.task("compile", () => {
  return gulp
    .src("./src/olum-jsonEditor.js")
    .pipe(concat("olum-jsonEditor.min.js"))
    .pipe(babel({ presets: ["@babel/preset-env"] }))
    .pipe(uglify())
    .pipe(header(comment))
    .pipe(gulp.dest("dist"));
});
gulp.task("copyJs", () => gulp.src(["./src/olum-jsonEditor.js"]).pipe(gulp.dest("dist")));
gulp.task("copyCss", () => gulp.src(["./src/styles/**/*"]).pipe(gulp.dest("dist/styles")));

gulp.task("default", gulp.series(["compile", "copyJs","copyCss"]));
