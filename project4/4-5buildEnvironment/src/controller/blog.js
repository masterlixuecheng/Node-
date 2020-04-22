const getList = (author, keyword) => {
    //先返回假数据（格式是正确的）
    return [
        {
            id:1,
            title:'标题A',
            createTime:1587446434552,
            author:'张帅'
        },
        {
            id:2,
            title:'标题B',
            createTime:1588446434552,
            author:'袁伟伟'
        },
        {
            id:3,
            title:'标题C',
            createTime:1588446434552,
            author:'韩嘉伟'
        },
        {
            id:4,
            title:'标题D',
            createTime:1588446434552,
            author:'凌树峰'
        },
    ]
}

const getDetail = (id) => {
    //先返回假数据（格式是正确的）
    return {
        id:1,
        title:'标题A',
        createTime:1587446434552,
        author:'张帅',
    }
}

const newBlog = (blogData = {}) => {
    // blogData ,是一个用户在客户端录入的博客对象，包含title,content等属性
    // console.log('newBlog blogData...=',blogData)
    return {
        id: 3 // 表示新建博客，插入到数据表里的id是3
    }
}

const updateBlog = (id,blogData = {}) =>{
    // id是要更新的博客id
    // blogData是一个博客对象，包含id，title，content等属性
    // console.log('update a blog===',id,blogData)

    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}