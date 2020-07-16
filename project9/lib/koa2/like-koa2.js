const http = require('http')

// 组合中间件-返回的是一个函数
function compose(middlewareList) {
    return function (ctx) {
        // 中间件调用
        function dispatch(i) {
            const fn = middlewareList[i]
            try {
                // 不管写没写async 所有的中间件都返回一个promise执行
                return Promise.resolve(
                    fn(ctx, dispatch.bind(null, i + 1))
                )
            } catch {
                return Promise.reject(err)
            }
        }
        return dispatch(0)
    }
}
class likeKoa2 {
    constructor() {
        this.middlewareList = [] // 中间件存储的数组
    }

    use(fn) {
        this.middlewareList.push(fn) // 注册
        return this
    }

    createContext(req, res) {
        // 简化一下，只赋值两个，实际上koa2 做了更多的工作
        const ctx = {
            req,
            res
        }
        ctx.query = req.query
        return ctx
    }

    handelRequest(ctx, fn) {
        return fn(ctx)
    }

    callback() {
        // 要第一个中间件
        // conpose会返回一个需要接收ctx参数的函数---即fn()
        // 把已经将req，res赋值后的ctx传入fn(ctx) 
        // 用handelRequest执行
        const fn = compose(this.middlewareList)

        return (req, res) => {
            const ctx = this.createContext(req, res)
            return this.handelRequest(ctx, fn)
        }
    }
    listen(...args) {
        const server = http.createServer(this.callback())
        server.listen(...args)
    }

}

module.exports = likeKoa2