const router = require('koa-router')()

router.prefix('/users') // 加了这一个行，一下所有的接口前面都要加上/users

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
