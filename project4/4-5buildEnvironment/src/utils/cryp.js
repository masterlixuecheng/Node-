const crypto = require('crypto')

// 密钥
const SECRET_KEY = 'J-YOQUE'

// MD5 加密
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密函数
function genPassword(password) {

}

module.exports = {
    genPassword
}