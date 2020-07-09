const crypto = require('crypto')

// 此文件没有编辑完成，应该是当时没有练习

// 密钥
const SECRET_KEY = 'J-YOQUE'

// MD5 加密
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports = {
    genPassword
}