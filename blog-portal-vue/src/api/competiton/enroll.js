import request from '@/utils/request';

export function getBmsh(url, obj) {
  return request({
    url: "/Bmsh/" + url,
    method: "post",
    data: obj
  })
}
export function getCheckList(url, obj) {
  return request({
    url: url,
    method: "post",
    data: obj
  })
}
export function getPeopleList(url, obj) {
  return request({
    url: url,
    method: "post",
    data: obj
  })
}
export function getDetail(xmbh, jjrzh) {
  return request({
    url: "/Bmsh/getJBidinfo/" + xmbh + "/" + jjrzh,
    method: "get"
  })
}
export function xxSave(obj) {
  return request({
    url: "/Bmsh/xxSh",
    method: "post",
    data: obj
  })
}
export function cwSave(obj) {
  return request({
    url: "/Bmsh/cwSh",
    method: "post",
    data: obj
  })
}
export function priceList(url, obj) {
  return request({
    url: "/" + url + "/getJBidinfoZcfList",
    method: "post",
    data: obj
  })
}
