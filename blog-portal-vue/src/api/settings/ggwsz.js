import request from '@/utils/request'

export function ggwszAdd(obj) {
    return request({
        url: '/CqjyGgwsz/addCqjyGgwsz',
        method: 'post',
        data: obj
    })
}

export function ggwszUpdate(obj) {
    return request({
        url: '/CqjyGgwsz/updateCqjyGgwsz',
        method: 'post',
        data: obj
    })
}

export function ggwszSearch(obj) {
    return request({
        url: '/CqjyGgwsz/selectCqjyGgwszPage',
        method: 'post',
        data: obj
    })
}


export function ggwszDel(obj) {
    return request({
        url: '/CqjyGgwsz/deleteCqjyGgwsz',
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

