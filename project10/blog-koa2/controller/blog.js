const xss = require('xss')
const { exec } = require('../db/mysql')


const getList = async (obj) => {

    let sql = `select * from blogs where 1=1 `
    if (obj.author) {
        sql += `and author='${obj.author}' `
    }
    if (obj.keyword) {
        sql += `and title like '%${obj.keyword}%' `
    }
    let pageSize = obj.pageSize
    let pageNo = (obj.pageNo - 1) * pageSize
    sql += `order by createtime desc limit ${pageNo},${pageSize};`
    // sql += `order by createtime desc limit ${pageNo},${pageSize}; select count(*) from blogs as total`
    console.log('sql...'+ sql);
    let sqlForTotal = 'select count(*) tot from blogs'
    let a = []
    let b = null
    a = await exec(sql)
    b = await exec(sqlForTotal)
    const data = {
        data : a,
        totalCount: b[0].tot
    }
    // 返回 promise
    return data
}

const getDetail = async (id) => {
    let sql = `select * from blogs where id='${id}'`
    // return await exec(sql).then(rows => {
    //     return rows[0]
    // })
    // 换一种写法，更清晰
    const rows = await exec(sql)
    return rows[0]
}

const newBlog = async (blogData = {}) => {
    // blogData ,是一个用户在客户端录入的博客对象，包含title,content等属性
    const title = xss(blogData.title) // 加了 xss 就加这一个吧，意思意思，知道咋回事就行了，对应 《8-2 xss攻击》
    const content = blogData.content
    const createtime = Date.now()
    const picture = blogData.picture
    const author = blogData.author

    const sql = `insert into blogs (title,content,createtime,author,picture) values ('${title}', '${content}', ${createtime}, '${author}', '${picture}')`
    
    const insertData = await exec(sql)
    return {
        id: insertData.insertId
    }

}

const updateBlog = async (id,blogData = {}) =>{
    // id是要更新的博客id
    // blogData是一个博客对象，包含id，title，content等属性
    const title = blogData.title
    const content = blogData.content
    const picture = blogData.picture

    const sql = `update blogs set title='${title}', content='${content}', picture='${picture}' where id='${id}'`

    // return await exec(sql).then(updataData => {
    //     if (updataData.affectedRows > 0) {
    //         return true
    //     }
    //     return false
    // })
    const updataData = await exec(sql)
    if (updataData.affectedRows > 0) {
        return true
    }
    return false

}

const delBlog = async (id, author) => {
    const sql = `delete from blogs where id='${id}' and author='${author}'`
    // return await exec(sql).then(delData => {
    //     if (delData.affectedRows > 0) {
    //         return true
    //     }
    //     return false
    // })
    const delData = await exec(sql)
    if (delData.affectedRows > 0) {
        return true
    }
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}