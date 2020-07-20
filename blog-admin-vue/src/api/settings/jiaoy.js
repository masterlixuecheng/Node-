import request from '@/utils/request'

export function jiaoyAdd(obj) {
  return request({
    url: '/TradeCenter/addTradeCenter',
    method: 'post',
    data: obj
  })
}

export function jiaoyUpdate(obj) {
  return request({
    url: '/TradeCenter/updateTradeCenter',
    method: 'post',
    data: obj
  })
}

export function jiaoySearch(obj) {
  return request({
    url: '/TradeCenter/selectTradeCenterPage',
    method: 'post',
    data: obj
  })
}


export function jiaoyiDel(obj) {
  return request({
    url: '/TradeCenter/deleteTradeCenter',
    method: 'post',
    data: obj
  })
}

export function revampPassword(obj) {
  return request({
    url: '/user/updatepassword',
    method: 'post',
    data: obj
  })
}

