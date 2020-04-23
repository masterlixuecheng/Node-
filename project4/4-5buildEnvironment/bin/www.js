// 第一层
// bin下的www.js
// 纯createServer逻辑
// 不涉及业务代码的处理

const http = require('http')

const PORT = 4565

const serverHandle = require('../app.js')

const server = http.createServer(serverHandle)

server.listen(PORT)

