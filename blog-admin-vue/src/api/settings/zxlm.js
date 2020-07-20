import request from '@/utils/request'

export function zxlmAdd(obj) {
    return request({
        url: '/CqjyZxlm/addCqjyZxlm',
        method: 'post',
        data: obj
    })
}

export function zxlmUpdate(obj) {
    return request({
        url: '/CqjyZxlm/updateCqjyZxlm',
        method: 'post',
        data: obj
    })
}

export function zxlmSearch(obj) {
    return request({
        url: '/CqjyZxlm/selectCqjyZxlmPage',
        method: 'post',
        data: obj
    })
}


export function zxlmDel(obj) {
    return request({
        url: '/CqjyZxlm/deleteCqjyZxlm',
        method: 'post',
        data: obj
    })
}

export function revampPassword(obj) {
    return request({
        url: '/user/updatepassword',
        method: 'post',
        data: obj
    })
}

export function getSj(obj) {
    return request({
        url: "/CqjyZxlm/selectSjlmByLmjb",
        method: "get"
    })
}

