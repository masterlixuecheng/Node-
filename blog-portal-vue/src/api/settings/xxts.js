import request from '@/utils/request'

export function getXxts(obj) {
  return request({
    url: '/Tip/selectTipPage',
    method: 'post',
    data: obj
  })
}
export function addXxts(obj) {
  return request({
    url: '/Tip/addTip',
    method: 'post',
    data: obj
  })
}
export function setXxts(obj) {
  return request({
    url: '/Tip/updateTip',
    method: 'post',
    data: obj
  })
}
export function delXxts(id) {
  return request({
    url: '/Tip/deleteTip',
    method: 'post',
    data: {
      id
    }
  })
}
