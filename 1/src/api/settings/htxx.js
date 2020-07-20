import request from '@/utils/request'

export function getAdminList(obj) { 
  return request({
    url: '/xtgl/findPage',
    method: 'post',
    data: obj
  })
}
export function getAdminById(id) {
  return request({
    url: '/xtgl/selectById',
    method: 'post',
    data: {
      id
    }
  })
}
export function updateAdmin(obj) {
  return request({
    url: '/xtgl/update',
    method: 'post',
    data: obj
  })
}
export function addAdmin(obj) {
  return request({
    url: '/xtgl/add',
    method: 'post',
    data: obj
  })
}
export function delAdmin(id) {
  return request({
    url: '/xtgl/delete',
    method: 'post',
    data: {
      id
    }
  })
}


export function getBankList(obj) {
  return request({
    url: '/zhxx/findPage',
    method: 'post',
    data: obj
  })
}
export function getBankById(id) {
  return request({
    url: '/zhxx/selectById',
    method: 'post',
    data: {
      id
    }
  })
}
export function updateBank(obj) {
  return request({
    url: '/zhxx/update',
    method: 'post',
    data: obj
  })
}
export function addBank(obj) {
  return request({
    url: '/zhxx/add',
    method: 'post',
    data: obj
  })
}
export function delBank(id) {
  return request({
    url: '/zhxx/delete',
    method: 'post',
    data: {
      id
    }
  })
}
export function liWaiAdmin(id) {
  return request({
    url: '/xtgl/updateByqy',
    method: 'post',
    data: {
      id
    }
  })
}
