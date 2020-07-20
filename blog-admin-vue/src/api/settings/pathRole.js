import request from '@/utils/request'

export function pathRole(username) {
  return request({
    url: '/getPathRole',
    method: 'post',
    data: {
      username
    }
  })
}