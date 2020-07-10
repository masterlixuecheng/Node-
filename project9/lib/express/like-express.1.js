
// 能自己默写出来

const http = require('http')
const slice = Array.prototype.slice // ??????????????

class likeExpress {
    constructor() {
        // 存放中间件的列表
        this.routes = {
            all: [],  // app.use(....)
            get: [],  // app.get(....)
            post: []  // app.post(....)
            // 可扩展 put patch delete 不常用的
        }
    }

    register(path) {
        // 作用：暴露出info对象
        // 把路由地址放入info.path
        // 把中间件放入info.stack

        // 通用的注册中间件的方法，表层输出
        const info = {}
        if (typeof path === 'string') {
            // 第一个参数可能是路由地址，也可能直接是中间件
           
            info.path = path
            // slice.call得到的是一个数组
            // 第一个是路由地址
            // 从第二个开始的所有参数，转换为数组，存到stack里面去
            info.stack = slice.call(arguments, 1) // 数组

            console.log('info.sta2ck...' + JSON.stringify(arguments));
        } else {
             // 如果path不写，默认就是根路由 '/'
            info.path = '/'
            // 从第一个开始的所有参数，转换为数组，存到stack里面去
            info.stack = slice.call(arguments, 0)
            
            console.log('info.stack2...' + JSON.stringify(arguments));
        }
        return info
    }

    use() {
        // 通过 apply ?????????????????????? 把传入use的所有参数，都传入register 中
        const info = this.register.apply(this, arguments)
        this.routes.all.push(info)
    }

    get() {
        console.log('get...' + JSON.stringify(this));
        const info = this.register.apply(this, arguments)
        this.routes.get.push(info)

    }

    post() {
        const info = this.register.apply(this, arguments)
        this.routes.post.push(info)

    }

    match(method, url) {
        console.log(2);
        
        // 作用:
        // 通过all, method把可用的中间件找出来
        // 通过路由的判断把需要匹配的？？？？？？？？找出来存入stack
        let stack = []
        if (url === '/favicon.ico') {
            return stack
        }

        // 获取 routs
        let curRoutes = []
        curRoutes = curRoutes.concat(this.routes.all)// 不管是什么都会走这个all-use
        curRoutes = curRoutes.concat(this.routes[method])

        curRoutes.forEach(routeInfo => {
            console.log('routeInfo...' + JSON.stringify(routeInfo));
            
            if (url.indexOf(routeInfo.path) === 0) {
                // 当 url === '/api/get-cookie' 且 routeInfo.path === '/'
                // 当 url === '/api/get-cookie' 且 routeInfo.path === '/api'
                // 当 url === '/api/get-cookie' 且 routeInfo.path === '/api/get-cookie'
                stack = stack.concat(routeInfo.stack)
            }
        })
        console.log(3);
        console.log('333stack...' + JSON.stringify(stack));
        return stack
    }

    // 核心的next机制
    handel(req, res, stack) {
        console.log(5);
        console.log('555stack...' + JSON.stringify(stack));
        
        // 作用：
        // 循环执行中间件
        const next = () => {
            // 拿到第一个匹配的中间件
            //利用shilft拿到第一个中间件，马上执行
            const middleware = stack.shift()
            console.log(6);
            
            if (middleware) {
                // 执行中间件函数
                // router.post('/update', (req, res, next) =>{
                    // next()
                // } 
                // 当一个函数执行完成，
                // 里面如果有next()会再继续执行这个next函数，继续在stack中匹配第二个往下执行
               console.log(7);
               
                middleware(req, res, next)
            }
        }
        // 定义之后，立马执行
        next()
    }

    callback() {
        // 作用：返回一个回调函数放入listen中
        // 定义一个res.json()
        // 获取url，method
        // 通过match匹配所有可用的中间件列表

        return (req, res) => {
            // 在这里定义res.json是因为node不自带这个方法，
            res.json = (data) => {
                res.setHeader('Content-type', 'application/json')
                res.end(
                    JSON.stringify(data)
                )
            }
            const url = req.url
            const method = req.method.toLowerCase()
console.log(1);

            const resultList = this.match(method, url)
            console.log(4);
            
            this.handel(req, res, resultList)
            console.log(8);
            
             
        }
    }

    listen(...args) {
        // 作用：创建server对象进行监听
        const server = http.createServer(this.callback())
        server.listen(...args)
    }

}


// 工厂函数---会产生一个新的对象返回出去
// 《js设计模式的讲解与应用》
module.exports = () => {
    return new likeExpress()
}

