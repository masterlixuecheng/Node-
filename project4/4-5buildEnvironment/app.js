const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const {get, set} = require('./src/db/redis')
const { access } = require('./src/utils/log')
// session 数据
const SESSION_DATA = {}


//获取cookie 过期时间
const getCookieExpires = () => {
    const d = new Date()
    d.setTime(d.getTime() + (24*60*60*1000))
    return d.toGMTString()
}

// 在这加promise处理postdata的函数
const getPostData = (req) => {
    const promise = new Promise((resolve,reject) => {
        // get接口，返回一个{}
        if(req.method !== 'POST') {
            resolve({})
            return
        }

        // 不是json格式的，也返回一个{}
        if(req.headers['content-type'] !== 'application/json') {
            resolve({})
            return
        }

        // 是post接口
        let postData = ''
        req.on('data', chunk => {
            // 使用chunk拼接
            postData += chunk.toString()
        })
        req.on('end', () => {
            // 没有传参，也返回一个{}
            if(!postData){
                resolve({})
                return
            }
            // 有传参，一切正常，返回一个JSON对象
            resolve(
                JSON.parse(postData)
            )
        })
    })
    return promise
}

const serverHandle = (req,res) => {
    // 记录 access log
    access(
        `${req.method} -- ${req.url} -- ${req.headers['user-agent']} -- ${Date.now()}`
    )

    // 设置返回格式为JSON
    res.setHeader('Content-type','application/json')

    // 解析 path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析 query
    req.query = querystring.parse(url.split('?')[1])

    //解析 cookie
    req.cookie = {}
    const cookieStr = req.headers.cookie ||  '' // k1=v1;k2=v2
    cookieStr.split(';').forEach(item => {
        if (!item) {
            return
        }
        const arr = item.split('=')
        const key = arr[0].trim()
        const val = arr[1].trim()
        req.cookie[key] = val
    })

    // 解析 session----------换成redis  so 注释
    // let needSetCookie = false
    // let userId = req.cookie.userid
    // if (userId) {
    //     if (!SESSION_DATA[userId]) {
    //         SESSION_DATA[userId] = {};
    //     }
    // } else {
    //     needSetCookie = true
    //     userId = `${Date.now()}_${Math.random()}`
    //     SESSION_DATA[userId] = {}
    // }
    // req.session = SESSION_DATA[userId]
    
    //  解析 session
    let needSetCookie = false
    let userId = req.cookie.userid
    if (!userId) {
        needSetCookie = true
        userId = `isnew_new_${Date.now()}_${Math.random()}`
        // 初始化 redis 中的 session 的值
        set(userId,{})
    }
    //获取 session
    req.sessionId = userId
    get(req.sessionId).then(sessionData => {
        if (sessionData == null) {
            //初始化 redis 中的 session 的值
            set(req.sessionId, {})
            //设置 req 中的 session
            req.session = {}
        } else {
            //设置 session
            req.session = sessionData
        }

        // 处理 postData
        return getPostData(req)
    })
    .then(postData => {
        req.body = postData

        // 处理blog路由
        // const blogData = handleBlogRouter(req,res)
        // if(blogData){
        //     res.end(
        //         JSON.stringify(blogData)
        //     )
        //     return
        // }

        const blogResult = handleBlogRouter(req, res)
        if (blogResult) {
            blogResult.then(blogData => {
                // cookie中没有userid的情况下，各个路由的res.end之前，先设置cookie
                if (needSetCookie) {
                    res.setHeader('Set-Cookie',`userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
                }

                res.end(
                    JSON.stringify(blogData)
                )
            })
            return
        }

        //处理user路由
        // const userData = handleUserRouter(req,res)
        // if(userData){
        //     res.end(
        //         JSON.stringify(userData)
        //     )
        //     return
        // }
        const userResult = handleUserRouter(req, res)
        if (userResult) {
            userResult.then(userData => {
                if (needSetCookie) {
                    res.setHeader('Set-Cookie',`userid=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
                }

                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }
        
        //未命中路由，统一返回404
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("404 NOT FOUND")
        res.end()
    })



}

module.exports = serverHandle