import request from '@/utils/request'

export function getHome(xzqh) {
  return request({
    url: '/CqjySy/selectCqjySy',
    method: 'post',
    data: {
      xzqh
    }
  })
}
export function getLine(xzqh, zltype) {
  return request({
    url: '/CqjySy/selectCqjySyByXzqhToZL',
    method: 'post',
    data: {
      xzqh,
      zltype
    }
  })
}
