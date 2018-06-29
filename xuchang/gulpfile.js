var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var url = require('url');
var path = require('path');
var fs = require('fs');
var mock = require('./mock/');
var userdata = require('./mock/login/user').user;
//压缩
var mincss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var minjs = require('gulp-uglify');
var babel = require('gulp-babel');
var htmlmins = require('gulp-htmlmin');
gulp.task('scss', function() {
    gulp.src('src/scss/*scss')
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});
gulp.task('dev', function() {
    gulp.watch('src/scss/*scss', ['scss']);
});
gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            host: 'localhost',
            port: 9999,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return false;
                }
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                if (/\/api\//.test(pathname)) {
                    if (pathname === '/api/login') {
                        var arr = [];
                        req.on('data', function(chunk) {
                            arr.push(chunk);
                        });
                        req.on('end', function() {
                            var data = require('querystring').parse(Buffer.concat(arr).toString());
                            if (pathname === '/api/login') {
                                //登录
                                //遍历json对象
                                var result = userdata.some(function(v) {
                                    return v.user == data.user && v.pwd == data.pwd;
                                });
                                if (result) {
                                    res.end('{"code":"1","msg":"登录成功"}');
                                } else {
                                    res.end('{"code":"0","msg":"用户名或密码错误"}');
                                }
                            } else {
                                //添加注册
                                userdata.unshift(data);
                                var userObj = {
                                    user: userdata
                                };
                                fs.writeFileSync('./mock/login/user.json', JSON.parse(userObj));
                                res.end('{"code":"1","msg":"注册成功"}');
                            }
                        });
                        return false;
                    }
                    res.end(JSON.stringify(mock(req.url)));
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }
            }
        }))
});
//压缩css
gulp.task('mincss', function() {
        gulp.src('src/css/*.css')
            .pipe(mincss())
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(gulp.dest('build/css'));
    })
    // 压缩js
gulp.task('minjs', function() {
        gulp.src('src/js/**/*.js')
            .pipe(babel({
                presets: 'es2015'
            }))
            .pipe(minjs())
            .pipe(gulp.dest('build/js'));
    })
    // 压缩html
gulp.task('htmlmins', function() {
    gulp.src('src/**/*.html')
        .pipe(htmlmins({
            removeComments: false,
            collapseWhitespace: true


        }))
        .pipe(gulp.dest('build/page'));
})
gulp.task('default', ['dev', 'mincss', 'minjs', 'htmlmins', 'server']);