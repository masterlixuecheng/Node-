const router = require('koa-router')() 
// 这是一个从koa中分离出来的 要单独引入，单koa里是没有这功能的
// ctx
// 封装了 req, res
 
router.get('/', async (ctx, next) => {
  await ctx.render('index', { // 
    title: 'This is a page on 0716!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string' // 赋值即返回值
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
