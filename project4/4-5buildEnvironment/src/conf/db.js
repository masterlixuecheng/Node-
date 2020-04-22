const env = process.env.NODE_ENV // 环境参数  开发环境。。。

// 配置

let MYSQL_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3006',
        database: 'myblog'
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3006',
        database: 'myblog'
    }

}

module.exports = {
    MYSQL_CONF
}