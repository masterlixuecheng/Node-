const router = require('koa-router')()
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
router.prefix('/api/user') // 加了这一个行，一下所有的接口前面都要加上/user

// 测试登录
router.post('/login', async function(ctx, next) {
  // const { username, password } = ctx.request.body
  const username = ctx.request.body.username
  const password = ctx.request.body.password
  console.log('ctx.request.body...' + JSON.stringify(ctx));
  console.log('username...' + username + 'password...' + password + 'ctx.body...' + JSON.stringify(ctx.request.body))
  const data = await login(username,password)
  console.log('data...' + JSON.stringify(data));
  
  if (data.username) {
    // 设置session
    ctx.session.username = data.username
    ctx.session.realname = data.realname

    ctx.body = {
      success: true,
      token: 123456789
    }
    return  // 直接return  结束操作。
  } else {
    ctx.body = new ErrorModel('登录失败')
  }

})

// router.post('/login', async function (ctx, next) {
//   const {username, password} = ctx.request.body
//   ctx.body = {
//     success: true,
//     username,
//     password
//   }
// })
// 运行结果：
// http://localhost:8000/api/blog/list?pagesize=10&pageNo=2
// {
//   "success": true,
//   "username": "zhangsanhahaha",
//   "password": "1233333"
// }

router.get('/session-test', async function (ctx, next) {
  if (ctx.session.viewCount == null) {
    ctx.session.viewCount = 0
  }
  ctx.session.viewCount++
  ctx.body = {
    success: true,
    viewCount: ctx.session.viewCount
  }
})

module.exports = router
