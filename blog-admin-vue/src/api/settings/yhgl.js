import request from '@/utils/request'

export function userAdd(obj) {
  return request({
    url: '/uUserPortal/SaveAndUpdateToUserPortalAndInfoPortal',
    method: 'post',
    data: obj
  })
}

export function userSearch(obj) {
  return request({
    url: '/uUserPortal/findUserPortal',
    method: 'post',
    data: obj
  })
}

export function userDel(ids) {
  return request({
    url: '/uUserPortal/dels',
    method: 'post',
    data: {
      ids
    }
  })
}

export function revampPassword(obj) {
  return request({
    url: '/user/updatepassword',
    method: 'post',
    data: obj
  })
}
