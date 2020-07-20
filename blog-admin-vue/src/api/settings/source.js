import request from '@/utils/request'

export function treeQuery(obj) {
  return request({
    url: '/permissionOne/findAllPermission',
    method: 'post',
    data:obj
  })
}
export function formSave(url, obj) {
  return request({
    url: '/permission/' + url,
    method: 'post',
    data: obj
  })
}
export function treeDel(obj) {
  return request({
    url: '/permissionOne/deleteAll',
    method: 'post',
    data: obj
  })
}
export function checkUri(uri) {
  return request({
    url: '/permission/selectByUri',
    method: 'post',
    data: {
      uri
    }
  })
}
