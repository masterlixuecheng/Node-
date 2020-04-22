// 目标：建一个数据模型
// 目的：把返回值的各种格式，统一起来

class BaseModel {
    constructor(data,message) {
        if (typeof data === 'string') {
            this.message = data
            data = null
            message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data,message) {
        super(data,message)//执行父函数并传值data，message
        this.success = true
        this.errno = 0
    }
}

class ErrorModel extends BaseModel {
    constructor(data,message) {
        super(data,message)
        this.errno = false
        this.errno = -1
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}