import request from '@/utils/request'

export function dklxAdd(obj) {
  return request({
    url: '/CqjyDklx/addCqjyDklx',
    method: 'post',
    data: obj
  })
}

export function dklxUpdate(obj) {
  return request({
    url: '/CqjyDklx/updateCqjyDklx',
    method: 'post',
    data: obj
  })
}

export function dklxSearch(obj) {
  return request({
    url: '/CqjyDklx/selectCqjyDklxPage',
    method: 'post',
    data: obj
  })
}


export function dklxDel(obj) {
  return request({
    url: '/CqjyDklx/deleteCqjyDklx',
    method: 'post',
    data: obj
  })
}

export function xmflSearch(obj) {
    return request({
      url: '/CqjyXmfl/selectFlnameByCqjyXmfl',
      method: 'get'
    })
  }

