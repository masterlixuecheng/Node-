const router = require('koa-router')()
const multer = require('koa-multer');//加载koa-multer模块
const { getList,} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const loginCheck = require('../midleware/loginCheck')

router.prefix('/api/file') // 加了这一个行，一下所有的接口前面都要加上/blog

// async 不加的话 里面用await报错

// 上传 图片
var storage = multer.diskStorage({
  //文件保存路径
  destination: function(req, file, cb) {
      cb(null, 'public/')
  },
  //修改文件名称
  filename: function(req, file, cb) {
      var fileFormat = (file.originalname).split(".");
      cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
//加载配置
var upload = multer({
storage: storage
});
router.post('/upload', upload.single('file'), async(ctx, next) => {
let data = {
  msg: 'http://localhost:7000/' + ctx.req.file.filename //返回文件名
}
ctx.body =  new SuccessModel(data)
})

module.exports = router
