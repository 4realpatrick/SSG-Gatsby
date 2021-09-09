import gulp from "gulp";
import run from "gulp-run";
import watch from "gulp-watch"
// task后面可以是一个回调(单任务)，也可以是由series和parallel组成的任务组
gulp.task("server-watch", () => 
  watch("src/service/index.ts", () => {
    console.log("service change detected run tsc command");
    return gulp.src("src/service/index.ts").pipe(run("tsc"));
  })
)

