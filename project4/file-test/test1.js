const fs = require('fs')
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt')

// 读取文件
// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     // data 是二进制类型，需要转化为字符串
//     // 你好 打印出来是====<Buffer e4 bd a0 e5 a5 bd>
//     console.log(data.toString())
// })

// 写入文件
// const content = '这是writeFile写入的新内容' + new Date() + '\n'
// const opt = {
//     flag : 'w' // 追加写入。覆盖用‘w'
// }
// fs.writeFile(fileName, content, opt, (err) => {
//     if (err) {
//         console.error(err)
//     }
// })

// 判断文件是否存在
fs.exists(fileName + '', (exist) => {
    console.log('exist...' + exist)
    
})