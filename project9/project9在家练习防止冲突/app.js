const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log('请求开始。。。。', req.method, req.url)
    next()
})

app.use((req, res, next) => {
    // 假设在处理cookie
    req.cookie = {
        userId: 'abc123'
    }
    next()
})

app.use((req, res, next) =>{
    //假设处理 postdata
    setTimeout(() => {
        req.body = {
            a: 100,
            b: 200
        }
        next()
    }, 100);
})

app.use('/api', (req, res, next) => {
    console.log('处理api路由')
    next()
})

app.get('/api', (req, res, next) => {
    console.log('处理get api路由')
    next()
})

app.post('/api', (req, res, next) => {
    console.log('处理post api路由')
    next()
})

function loginCheck(req, res, next) {
    console.log('进行了模拟登陆验证')
    next()
}

function loginCheck2(req, res, next) {
    setTimeout(() => {
        console.log('模拟登陆失败')   
        res.json({
            success: false,
            data: '模拟登陆失败'
        })
    });
    // next()
}

function loginCheck3(req, res, next) {
    console.log('最后一次模拟登陆验证')
    next()
}

app.get('/api/get-cookie', loginCheck, loginCheck3, loginCheck2, (req, res, next) => {
    console.log('get /api/get-cookie')
    res.json({
        success: true,
        data: req.cookie
    })
})

app.post('/api/get-post-data', (req, res, next) => {
    console.log('post /api/get-post-data')
    res.json({
        success: true,
        data: req.body
    })
})

app.use((req, res, next) => {
    console.log('处理404');
    res.json({
        success: false,
        data: '未找到对应路由'
    })
    
})









app.listen(3000, () => {
    console.log('running success on 3000 port')
})