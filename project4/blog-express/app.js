var createError = require('http-errors'); //  404
var express = require('express'); //  工具
var path = require('path'); //  路径
var cookieParser = require('cookie-parser'); //  cookie
var logger = require('morgan'); //  记录日志

var indexRouter = require('./routes/index'); //  404
var usersRouter = require('./routes/users'); //  404

var app = express(); // 所有都引用完，生成实例

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); //  实现日志记录的功能
app.use(express.json()); // 把 post 方式传入的数据处理后存在 req.body 里，相当于getPostData()
app.use(express.urlencoded({ extended: false })); // 把其他传入的数据处理后存在 req.body 里，相当于getPostData()
app.use(cookieParser()); // 处理 cookie 相当于自己封装的那个函数
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件

app.use('/', indexRouter); // 注册路由 内有注释
app.use('/users', usersRouter); // 注册路由 内有注释

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 程序出错时，开发环境抛出错误，
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
