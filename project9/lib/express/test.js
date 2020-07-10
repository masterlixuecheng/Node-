const express = require('./like-express.1')

//本次http请求的实例
const app = express()

app.use((req, res, next) => {
    console.log('请求开始。。。', req.method, req.url)
    next()
})

app.use((req, res, next) => {
    console.log('假设在处理cookie')
    req.cookie = {
        userId: 'J-YOQUELOVE'
    }
    next()
})

app.get('/api', (req, res,next) => {
    console.log('处理get路由了');
    next()
})

// 模拟登陆验证
function loginCheck(req, res, next) {
    setTimeout(() => {
        console.log('模拟登陆成功了啊');
        next()
    }, 10);
}

app.get('/api/get-cookie', loginCheck, (req, res, next) => {
    console.log('/api/get-cookie')
    res.json({
        success: true,
        data: req.cookie
    })
})

app.listen(8001, () => {
    console.log('running success on 8001');
    
})