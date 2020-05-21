// 复制文件
// const fs = require('fs')
// const path = require('path')

// const fileName1 = path.resolve(__dirname,'data.txt')
// const fileName2 = path.resolve(__dirname,'data-back2.txt')

// const readStream = fs.createReadStream(fileName1)
// const writeStream = fs.createWriteStream(fileName2)

// 读取文件.pipe(写入文件)
//读取了文件用pipe方式 pipe到一个新文件中，么有的话，会自动创建
// readStream.pipe(writeStream)

// readStream.on('data', chunk => {
//     console.log(chunk.toString())
// })

// readStream.on('end', () => {
//     console.log('copy is done')
// })
const fs = require('fs')
const http = require('http')
const path = require('path')
const fileName1 = path.resolve(__dirname,'data.txt')

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        const readStream = fs.createReadStream(fileName1)
        readStream.pipe(res)
    }
})

server.listen(8090)
