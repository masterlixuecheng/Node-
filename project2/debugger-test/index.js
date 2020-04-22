const http = require('http')

const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type': 'text/html'})
    res.end('<h1>hello</h1>')
})

server.listen(3001,()=>{
    console.log('server is running on 3000 port')
})