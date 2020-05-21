const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

const getDetail = (id) => {
    let sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    // blogData ,是一个用户在客户端录入的博客对象，包含title,content等属性
    const title = blogData.title
    const content = blogData.content
    const createtime = Date.now()
    const author = blogData.author

    const sql = `insert into blogs (title,content,createtime,author) values ('${title}', '${content}', ${createtime}, '${author}')`
    return exec(sql).then(insertData => {
        return {
            id: insertData.insertId
        }
    })

}

const updateBlog = (id,blogData = {}) =>{
    // id是要更新的博客id
    // blogData是一个博客对象，包含id，title，content等属性
    const title = blogData.title
    const content = blogData.content

    const sql = `update blogs set title='${title}', content='${content}' where id='${id}'`

    return exec(sql).then(updataData => {
        if (updataData.affectedRows > 0) {
            return true
        }
        return false
    })
}

const delBlog = (id, author) => {
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    return exec(sql).then(delData => {
        if (delData.affectedRows > 0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}