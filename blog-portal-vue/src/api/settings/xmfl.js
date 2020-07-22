import request from '@/utils/request'

export function xmflAdd(obj) {
  return request({
    url: '/CqjyXmfl/addCqjyXmfl',
    method: 'post',
    data: obj
  })
}

export function xmflUpdate(obj) {
  return request({
    url: '/CqjyXmfl/updateCqjyXmfl',
    method: 'post',
    data: obj
  })
}

export function xmflSearch(obj) {
  return request({
    url: '/CqjyXmfl/selectCqjyXmflPage',
    method: 'post',
    data: obj
  })
}


export function xmflDel(obj) {
  return request({
    url: '/CqjyXmfl/deleteCqjyXmfl',
    method: 'post',
    data: obj
  })
}

