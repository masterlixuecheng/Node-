import request from '@/utils/request'

export function dictAdd(obj) {
  return request({
    url: '/dict/add',
    method: 'post',
    data: obj
  })
}
export function dictUpdate(obj) {
  return request({
    url: '/dict/update',
    method: 'post',
    data: obj
  })
}

export function dictSearch(obj) {
  return request({
    url: '/dict/findPage',
    method: 'post',
    data: obj
  })
}
 
export function dictDel(id) {
  return request({
    url: '/dict/delete',
    method: 'post',
    data: {
      id
    }
  })
}
export function dictSelectById(id) {
  return request({
    url: '/dict/selectById',
    method: 'post',
    data: {
      id
    }
  })
}

export function dictSelect(name) {
  return request({
    url: '/dict/selectByType',
    method: 'post',
    data: {
      name
    }
  })
}

