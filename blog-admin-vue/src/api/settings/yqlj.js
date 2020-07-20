import request from '@/utils/request'

export function getYqlj(obj) {
  return request({
    url: '/CqjyMhglYqlj/selectCqjyMhglYqljPage',
    method: 'post',
    data: obj
  })
}
export function setYqlj(obj) {
  return request({
    url: '/CqjyMhglYqlj/updateCqjyMhglYqlj',
    method: 'post',
    data: obj
  })
}
export function addYqlj(obj) {
  return request({
    url: '/CqjyMhglYqlj/addCqjyMhglYqlj',
    method: 'post',
    data: obj
  })
}
export function delYqlj(id) {
  return request({
    url: '/CqjyMhglYqlj/deleteCqjyMhglYqlj',
    method: 'post',
    data: {
      id
    }
  })
}

export function getGx(yqljid) {
  return request({
    url: '/CqjyMhglYqljGx/selectCqjyMhglYqljGxByYqljid',
    method: 'post',
    data: {
      yqljid
    }
  })
}
export function setGx(obj) {
  return request({
    url: '/CqjyMhglYqljGx/updateCqjyMhglYqljGx',
    method: 'post',
    data: obj
  })
}
export function addGx(obj) {
  return request({
    url: '/CqjyMhglYqljGx/addCqjyMhglYqljGx',
    method: 'post',
    data: obj
  })
}
export function delGx(id) {
  return request({
    url: '/CqjyMhglYqljGx/deleteCqjyMhglYqljGx',
    method: 'post',
    data: {
      id
    }
  })
}

export function getMh() {
  return request({
    url: '/CqjyMhgl/selectMhnameAndMhidByCqjyMhgl',
    method: 'get'
  })
}
