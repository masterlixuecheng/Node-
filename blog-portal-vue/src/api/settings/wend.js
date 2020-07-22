import request from '@/utils/request'

export function getWdmbList(obj) {
  return request({
    url: '/CqjyWdmb/selectCqjyWdmbPage',
    method: 'post',
    data: obj
  })
}
export function getWdmb(id) {
  return request({
    url: '/CqjyWdmb/selectCqjyXxmbAndCqjyWdmbMbnrByid',
    method: 'post',
    data: {
      id
    }
  })
}
export function addWdmb(obj) {
  return request({
    url: '/CqjyWdmb/addCqjyWdmbAndCqjyWdmbMbnr',
    method: 'post',
    data: obj
  })
}
export function setWdmb(obj) {
  return request({
    url: '/CqjyWdmb/updateCqjyXxmbAndCqjyWdmbMbnrByid',
    method: 'post',
    data: obj
  })
}
export function delWdmb(id) {
  return request({
    url: '/CqjyWdmb/deleteCqjyXxmbAndCqjyWdmbMbnrByid',
    method: 'post',
    data: {
      id
    }
  })
}
export function openWdmb(id, mblx) {
  return request({
    url: '/CqjyWdmb/updateFB',
    method: 'post',
    data: {
      id,
      mblx
    }
  })
}

export function setHtnr(obj) {
  return request({
    url: '/htnr/addOrUpdate',
    method: 'post',
    data: obj
  })
}

export function getHtnr(xmbh) {
  return request({
    url: '/htnr/getByXmbh',
    method: 'post',
    data: {
      xmbh
    }
  })
}
