const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])

    //统一设置返回格式为JSON
    res.setHeader('Content-type','application/json')

    //set返回数据
    const resData = {
        method,
        url,
        path,
        query
    }

    //返回
    if(method === 'GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method === 'POST'){
        // 至少会有一次chunk，拼接
        let postData = ''
        req.on('data', chunk =>{
            postData += chunk.toString()
        })
        
        req.on('end', () => {
            resData.postData = postData
            //返回
            res.end(
                JSON.stringify(resData)
            )
        })

    }
})
server.listen(8000,()=>{
    console.log('ok-8000')
})