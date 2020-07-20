import request from '@/utils/request'

export function treeQuery(obj) {
  return request({
    url: '/PermissionMh/findAllPermissionMh',
    method: 'post',
    data:obj
  })
}
export function postMethod(url,obj) {
  return request({
    url: url,
    method: 'post',
    data:obj
  })
}
export function formSave(url, obj) {
  return request({
    url: '/PermissionMh/' + url,
    method: 'post',
    data: obj
  })
} 
export function treeDel(obj) {
  return request({
    url: '/PermissionMh/delete',
    method: 'post',
    data: obj
  })
}
export function treeById(obj) {
  return request({
    url: '/PermissionMh/findByID',
    method: 'post',
    data: obj
  })
}
export function treeInsert(obj) {
  return request({
    url: '/PermissionMh/insertSysMh',
    method: 'post',
    data: obj
  })
}
export function checkMhUri(uri) {
  return request({
    url: '/PermissionMh/selectByUri',
    method: 'post',
    data: {
      uri
    }
  })
}