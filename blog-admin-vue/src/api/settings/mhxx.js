import request from '@/utils/request'

export function getMhxxList(obj) {
  return request({
    url: '/CqjyMhgl/selectCqjyMhglPage',
    method: 'post',
    data: obj
  })
}
export function getMhxx(id) {
  return request({
    url: '/CqjyMhgl/selectCqjyMhglById',
    method: 'post',
    data: {
      id
    }
  })
}
export function setMhxx(obj) {
  return request({
    url: '/CqjyMhgl/updateCqjyMhgl',
    method: 'post',
    data: obj
  })
}
export function addMhxx(obj) {
  return request({
    url: '/CqjyMhgl/addCqjyMhgl',
    method: 'post',
    data: obj
  })
}
export function delMhxx(id) {
  return request({
    url: '/CqjyMhgl/deleteCqjyMhgl',
    method: 'post',
    data: {
      id
    }
  })
}

export function mhxxPermissionUpdate(obj) {
  return request({
    url: '/PermissionMh/updatemhgl',
    method: 'post',
    data: obj
  })
}
