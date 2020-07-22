import request from '@/utils/request'

export function getSEO(obj) {
  return request({
    url: '/CqjySeo/selectCqjySeoPage',
    method: 'post',
    data: obj
  })
}
export function addSEO(obj) {
  return request({
    url: '/CqjySeo/addCqjySeo',
    method: 'post',
    data: obj
  })
}
export function setSEO(obj) {
  return request({
    url: '/CqjySeo/updateCqjySeo',
    method: 'post',
    data: obj
  })
}
export function delSEO(id) {
  return request({
    url: '/CqjySeo/deleteCqjySeo',
    method: 'post',
    data: {
      id
    }
  })
}
