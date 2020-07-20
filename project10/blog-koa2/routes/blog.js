const router = require('koa-router')()

const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../midleware/loginCheck')

router.prefix('/api/blog') // 加了这一个行，一下所有的接口前面都要加上/blog

// async 不加的话 里面用await报错

// 博客列表
router.post('/list', async function(ctx, next) {

  const obj = ctx.request.body
  console.log('obj....' + JSON.stringify(obj));
  
  if (obj.isadmin) {
      // 管理员界面
      if (ctx.session.username == null) {
        // 未登录
        ctx.body = new ErrorModel('未登录')
        return
      }

      // 强制查询自己的博客（原本的author是在地址栏可以修改的）
      author = ctx.session.username
  }
  const listData = await getList(obj)
  // console.log('listData...............' + JSON.stringify(listData));
  
  ctx.body =  new SuccessModel(listData)
})

// 博客详情
router.get('/detail', async (ctx, next) => {
  const data = await getDetail(ctx.query.id)
  ctx.body = new SuccessModel(data)
})

// 新建博客
router.post('/new', loginCheck, async (ctx, next) => {
  const body = ctx.request.body
  body.author = ctx.session.username
  const data = await newBlog(body)
  ctx.body = new SuccessModel(data, '添加成功')
})

// 修改博客
router.post('/update', loginCheck, async (ctx, next) => {
  const body = ctx.request.body
  console.log(ctx.request.body.content);
  
  body.author = ctx.session.username
  const val = updateBlog(body.id, body)
  if (val) {
    ctx.body = new SuccessModel('修改成功')
  } else {
    ctx.body = new ErrorModel('更新博客失败')
  }

})

// 删除博客
router.get('/del', loginCheck, async (ctx, next) => {
  const author = ctx.session.username
  const val = await delBlog(ctx.query.id, author)
  if (val) {
    ctx.body = new SuccessModel('删除成功')
  } else {
    ctx.body = new ErrorModel('删除失败')
  }
})

module.exports = router
