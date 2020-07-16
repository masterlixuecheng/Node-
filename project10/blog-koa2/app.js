const Koa = require('koa')// error 
const app = new Koa()// error koa2实例
const views = require('koa-views')// error 对应views文件夹
const json = require('koa-json')// error 处理json
const onerror = require('koa-onerror')// error 处理错误
const bodyparser = require('koa-bodyparser')// error 处理接收的请求值
const logger = require('koa-logger')// error 没有日志记录的功能，至少开发环境让控制台更优美

const session = require('koa-generic-session')
const redisStore = require('koa-redis')
// 日志
const path = require('path')
const fs = require('fs')
const morgan = require('koa-morgan')
// 日志

// 引入路由
const index = require('./routes/index')// error 引入路由文件
const users = require('./routes/users')// error 
const blog = require('./routes/blog')// error 
const user = require('./routes/user')// error 

const { REDIS_CONF } = require('./conf/db')
// error handler
onerror(app)// error 监测

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']// 处理postData 处理多个格式，把字符串转成json格式
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()// 记录完当前时间后，先去执行其他函数，最后再回来继续执行，并把刚刚记录下来的时间，与下面的method拼接起来
  const ms = new Date() - start // 记录当前这个服务的耗时，毫秒
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// 日志
const ENV = process.env.NODE_ENV
if (ENV !== 'production') {
  app.use(morgan('dev')); //  实现日志记录的功能
} else {
  // 线上环境
  const logFileName = path.join(__dirname, 'logs', 'access.log')
  const writeStream = fs.createWriteStream(logFileName, {
    flags: 'a'
  })
  app.use(morgan('combined', {
    stream: writeStream
  }))
}
// 日志

// session 配置
app.keys = ['J-YOQUE']
app.use(session({
  // 配置cookie
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000
  },
  // 配置redis
  store: redisStore({
    // all: '127.0.0.1:6379' // 写死本地的redis server  稍后再配置
    all: `${REDIS_CONF.host}:${REDIS_CONF.port}`
  })
}))
// cnpm i koa-generic-session koa-redis redis --save
// 安装三个依赖，启动redis服务，配置上述代码，就成功了，这也太简单了

// routes 注册路由
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(user.routes(), user.allowedMethods())
app.use(blog.routes(), blog.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
