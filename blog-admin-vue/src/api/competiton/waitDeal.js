import request from '@/utils/request';

export function getWaitDeal(url, obj) {
  return request({
    url: "/BDcjxm/" + url,
    method: "post",
    data: obj
  })
}
export function getShow(xmbh) {
  return request({
    url: "/BYcjxm/getJCjgs/" + xmbh,
    method: "get"
  })
}
export function setShow(obj) {
  return request({
    url: "/BDcjxm/setToSccjgs",
    method: "post",
    data: obj
  })
}
export function getPublish(url, xmbh) {
  return request({
    url: "/BDcjxm/" + url + xmbh,
    method: "get"
  })
}
export function setPublish(url, xmbh) {
  return request({
    url: "/BDcjxm/" + url + xmbh,
    method: "get"
  })
}
export function getStop(id, type) {
  return request({
    url: "/BDcjxm/setZzzcById/" + id + "/" + type,
    method: "get"
  })
}
export function setStop(id, type) {
  return request({
    url: "/BDcjxm/setZzzcY/" + id + "/" + type,
    method: "get"
  })
}
export function setXyDeal(obj) {
  return request({
    url: "/BDcjxm/setXycjY",
    method: "post",
    data: obj
  })
}
export function setDelay(obj) {
  return request({
    url: "/BDcjxm/setYqY",
    method: "post",
    data: obj
  })
}
