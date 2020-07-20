// 目标：建一个数据模型
// 目的：把返回值的各种格式，统一起来

class BaseModel {
    constructor(data,msg) {
        if (typeof data === 'string') {
            this.msg = data
            data = null
            msg = null
        }
        if (data) {
            this.data = data
        }
        if (msg) {
            this.msg = msg
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data,msg) {
        super(data,msg)//执行父函数并传值data，message
        this.success = true
        this.errno = 0
        this.totalCount = data.length
        this.dataList = Array.prototype.slice.call(data)
    }
}

class ErrorModel extends BaseModel {
    constructor(data,msg) {
        super(data,msg)
        this.success = false
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}