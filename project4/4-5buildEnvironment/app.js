// 第二层
// app.js
// 系统基本信息的配置，
// 不涉及业务代码的处理

const querystring = require('querystring')
const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

    // 在这加promise处理postdata的函数

const getPostData = (req) => {
    const promise = new Promise((resolve,reject) => {
        // get接口，返回一个{}
        if(req.method !== 'POST') {
            resolve({})
            return
        }

        // 不是json格式的，返回一个{}
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
            // 没有传参，返回一个{}
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

    // 设置返回格式为JSON
    res.setHeader('Content-type','application/json')

    // 解析 path
    const url = req.url
    req.path = url.split('?')[0]

    // 解析 query
    req.query = querystring.parse(url.split('?')[1])

    // 在这里加promise
    getPostData(req).then(postData => {
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
                res.end(
                    JSON.stringify(userData)
                )
            })
            return
        }
        
        //未命中路由，返回404
        res.writeHead(404,{"Content-type":"text/plain"})
        res.write("404 NOT FOUND")
        res.end()
    })



}

module.exports = serverHandle