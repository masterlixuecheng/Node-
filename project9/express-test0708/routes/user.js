var express = require('express');
var router = express.Router();
const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

// 测试登录
router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  console.log('username...' + username)
  console.log('password...' + password)
  console.log('req.body...' + JSON.stringify(req.body))
  const result = login(username,password)
  return result.then(data => {
    console.log('data...' + JSON.stringify(data))
      if (data.username) {
          //操作 cookie
          // res.setHeader('Set-Cookie',`username=${username}; path=/; httpOnly; expires=${getCookieExpires()}`)

          // 设置session
          req.session.username = data.username
          req.session.realname = data.realname

          // 同步修改到 redis--现在就没有用了，因为之前redis 和 session是分开的
          // 现在用express-session操作会直接自动同步到redis中
          // set(req.sessionId, req.session)

           res.json(
            new SuccessModel()
           )
           return  // 直接return  结束操作。
      } else {
        res.json(
          new ErrorModel('登录失败')
        )
      }
      return 
  })
})

// router.get('/login-test', (req, res, next) => {
//   if (req.session.username) {
//     res.json({
//       data:'成功'
//     })
//     return
//   }
//   res.json({
//     data:'失败'
//   })
// })


router.get('/session-test', (req, res, next) => {
  const session = req.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++

  res.json({
    success: true,
    viewNum: session.viewNum,
    num: Math.random()
  })
})


module.exports = router;

