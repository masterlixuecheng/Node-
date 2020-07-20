import request from '@/utils/request'

export function getXxmb(obj) {
  return request({
    url: '/CqjyXxmb/selectCqjyXxmbPage',
    method: 'post',
    data: obj
  })
}
export function addXxmb(obj) {
  return request({
    url: '/CqjyXxmb/addCqjyXxmb',
    method: 'post',
    data: obj
  })
}
export function setXxmb(obj) {
  return request({
    url: '/CqjyXxmb/updateCqjyXxmb',
    method: 'post',
    data: obj
  })
}
export function delXxmb(id) {
  return request({
    url: '/CqjyXxmb/deleteCqjyXxmb',
    method: 'post',
    data: {
      id
    }
  })
}
