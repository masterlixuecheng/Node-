import request from '@/utils/request'

export function findSerialList(obj) {
  return request({
    url: '/xmhPz/selectPage',
    method: 'post',
    data: obj
  })
}
export function updateSerial(obj) {
  return request({
    url: '/xmhPz/update',
    method: 'post',
    data: obj
  })
}
export function addSerial(obj) {
  return request({
    url: '/xmhPz/add',
    method: 'post',
    data: obj
  })
}
export function delSerial(id) {
  return request({
    url: '/xmhPz/delete',
    method: 'post',
    data: {
      id
    }
  })
}
export function selectSerialById(id) {
  return request({
    url: '/xmhPz/selectById',
    method: 'post',
    data: {
      id
    }
  })
}
