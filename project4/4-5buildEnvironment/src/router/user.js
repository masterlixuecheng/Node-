const { login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const { set } = require('../db/redis')

//获取cookie 过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24*60*60*1000))
    console.log('d.toGMTString...'+ d.toGMTString)
    return d.toGMTString()
}
const handleUserRouter = (req,res) => {
    const method = req.method//GET POST
    console.log('req...'+ JSON.stringify(req.query))

    //登录
    if(method === 'POST' && req.path === '/api/user/login'){
        const { username, password } = req.body
        // console.log('req.query...' + req.query)
        console.log("username..." + username)
        console.log("password..." + password)
        const result = login(username,password)
        return result.then(data => {
            console.log("data..." + JSON.stringify(data))
            if (data.username) {
                //操作 cookie
                // res.setHeader('Set-Cookie',`username=${username}; path=/; httpOnly; expires=${getCookieExpires()}`)

                // 设置session
                req.session.username = data.username
                req.session.realname = data.realname
                console.log('req.session...' + JSON.stringify(req.session))

                // 同步修改到 redis
                set(req.sessionId, req.session)

                return new SuccessModel()
            }
            return new ErrorModel('登录失败')
        })
    }

    //登录验证的测试
    if(method === 'GET' && req.path === '/api/user/login-test') {
        if (req.session.username) {
            return Promise.resolve(
                new SuccessModel({
                    session:req.session
                })
            )
        }
        return Promise.resolve(
            new ErrorModel('尚未登录')
        )
    }

}

module.exports = handleUserRouter