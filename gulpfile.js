const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCss = require("gulp-clean-css");
const renameCss = require("gulp-rename");

gulp.task("sass", function () {
    return gulp.src("./src/assets/kendo-theme-default/scss/all.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist"))
        .pipe(minifyCss())
        .pipe(renameCss("all.min.css"))
        .pipe(gulp.dest("dist"));
})