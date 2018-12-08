//引入gulp
const gulp = require("gulp");
//引入babel及组件
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
//引入压缩
const uglify = require('gulp-uglify');

//引入服务器
const connect = require('gulp-connect');
//引入代理服务器
const proxy = require('http-proxy-middleware');




// 1. html => 1. 转存 2. 自动刷新;
// 2. js => babel 编译 es6 -> es5 || 压缩 || 合并 || 制作索引;
// 3. sass => 编译成css;
// 4. 监听 => js , html , css 活动之后自动刷新;
// 5. 服务器及代理功能;


// dev
//对html进行转存
gulp.task("html" , ()=>{
    return gulp.src(["./src/pages/*.html"]).pipe(gulp.dest("./dist/html")).pipe(connect.reload());
})

//合并压缩js
gulp.task("javascript" , ()=>{
    return gulp.src("./src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("all.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/js"));
})


//监听（同步）
gulp.task("watch",()=>{
    gulp.watch("./src/pages/*.html",["html"]);
   
})

//服务器代理
gulp.task("connect",()=>{
    connect.server({
          root: './dist',
          port:8888,
          livereload: true,
          middleware: function(connect, opt) {
                return [
                      proxy('/douban',  {
                            target: 'https://api.douban.com',
                            changeOrigin:true,
                            pathRewrite:{
                                  '^/douban' : "/"
                            }
                      }),
                      proxy('/mogu', {
                            target: 'https://list.mogujie.com',
                            changeOrigin: true,
                            pathRewrite:{
                                  '^/mogu' : "/"
                            }
                      })
                ]
          }
    });
})
gulp.task("default",["watch","connect"]);



// production

//压缩
gulp.task("uglifyjs" , ()=>{
    // 需求和实现出现了冲突,应该怎么做?
    return gulp.src("./dist/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/minjs"))
})
//先合并js后压缩
gulp.task("build",["js","uglifyjs"])