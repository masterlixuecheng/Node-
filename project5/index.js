const mysql = require('mysql')

// 创建连接对象
// con  connection简写

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'myblog'
})

// 开始连接
con.connect()

// 执行语句
// const sql = 'select * from users;'
// const sql = `insert into blogs (title,content,createtime,author) values('标题E','内容E',1587555795406,'孙月')`
const sql = `update blogs set content='内容D2' where id='5'`
con.query(sql, (err, result) => {
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

// 关闭连接
con.end()