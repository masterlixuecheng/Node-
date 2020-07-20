import request from '@/utils/request'

export function getLb(obj) {
  return request({
    url: '/CqjySwzclb/selectCqjySwzclbPage',
    method: 'post',
    data: obj
  })
}
export function addLb(obj) {
  return request({
    url: '/CqjySwzclb/addCqjySwzclb',
    method: 'post',
    data: obj
  })
}
export function setLb(obj) {
  return request({
    url: '/CqjySwzclb/updateCqjySwzclb',
    method: 'post',
    data: obj
  })
}
export function delLb(id) {
  return request({
    url: '/CqjySwzclb/deleteCqjySwzclb',
    method: 'post',
    data: {
      id
    }
  })
}
export function getXxbd() {
  return request({
    url: '/CqjySwzclb/selectLxmcByCqjySwzclb',
    method: 'get'
  })
}
