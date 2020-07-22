import request from '@/utils/request'

export function getApppzList(obj) {
  return request({
    url: '/app/findPage',
    method: 'post',
    data: obj
  })
}
export function getApppz(id) {
  return request({
    url: '/app/selectById',
    method: 'post',
    data: {
      id
    }
  })
}
export function setApppz(obj) {
  return request({
    url: '/app/update',
    method: 'post',
    data: obj
  })
}
export function addApppz(obj) {
  return request({
    url: '/app/add',
    method: 'post',
    data: obj
  })
}
export function delApppz(id) {
  return request({
    url: '/app/delete',
    method: 'post',
    data: {
      id
    }
  })
}
//app权限保存
export function setAppAuth(obj) {
  return request({
    url: '/app/updateApp',
    method: 'post',
    data: obj
  })
}