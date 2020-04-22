const http = require('http')
const querystring = require('querystring')

const server = http.createServer((req,res)=>{
    console.log(req.method)//GET

    const url = req.url
    console.log(url)
    // res.end('<h1>asasdasdas</h1>')
    req.query = querystring.parse(url.split('?')[1])
    console.log(req.query)//{ name: 'sa', sex: 'man' }
    
    res.end(
        JSON.stringify(req.query)
    )
})

server.listen(8000,()=>{
    console.log('running on 8000 port')
})