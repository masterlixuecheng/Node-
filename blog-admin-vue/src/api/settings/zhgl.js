import request from '@/utils/request'

export function userAdd(obj) {
  return request({
    url: '/user/saveuserinfo',
    method: 'post',
    data: obj
  })
}

export function userSearch(obj) {
  return request({
    url: '/user/findUsers',
    method: 'post',
    data: obj
  })
}

export function userByid(id) {
  return request({
    url: '/user/queryByid/' + id,
    method: 'get'
  })
}

export function userDel(ids) {
  return request({
    url: '/user/dels',
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

