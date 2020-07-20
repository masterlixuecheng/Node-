import request from '@/utils/request'

export function getLed(obj) {
  return request({
    url: '/led/findPage',
    method: 'post',
    data: obj
  })
}
export function setLed(obj) {
  return request({
    url: '/led/update',
    method: 'post',
    data: obj
  })
}
export function addLed(obj) {
  return request({
    url: '/led/add',
    method: 'post',
    data: obj
  })
}
export function delLed(id, token) {
  return request({
    url: '/led/delete',
    method: 'post',
    data: {
      id,
      token
    }
  })
}
export function bigLED(obj, xzcode) {
  return request({
    url: '/MHJjdt/selectJjListTp',
    method: 'post',
    headers: {
      "xzcode": xzcode
    },
    data: obj
  })
}
