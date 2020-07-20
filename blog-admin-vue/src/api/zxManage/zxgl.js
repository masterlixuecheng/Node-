import request from '@/utils/request'


export function postMethod(url, obj) {
  return request({
    url,
    data: obj,
    method: 'post'
  })
}
export function getMethod(url, obj) {
  return request({
    url,
    params: obj
  })
}