const Koa = require('./like-koa2')
const app = new Koa();

app.use(async (ctx, next) => {
    console.log('第一层洋葱圈---开始...')
    await next();
    const rt = ctx['X-Response-Time'];
    console.log(`${ctx.req.method} ${ctx.req.url} - ${rt}`);
    console.log('第一层洋葱圈---结束')
  });
  
  // x-response-time
  
  app.use(async (ctx, next) => {
    console.log('第二层洋葱圈---开始')
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx['X-Response-Time'] =  `${ms}ms`;
    console.log('第二层洋葱圈---结束')
  });
  
  // response
  
  app.use(async ctx => {
    console.log('第三层洋葱圈---开始')
    ctx.res.end('Hello World');
    console.log('第三层洋葱圈---结束')
  });
  
  app.listen(3000);
  
  // 执行顺序：
  // 6-15-16-24-17-18-8-9
// 第一层洋葱圈---开始...
// 第二层洋葱圈---开始
// 第三层洋葱圈---开始
// 第三层洋葱圈---结束
// 第二层洋葱圈---结束
// GET / - 5ms
// 第一层洋葱圈---结束