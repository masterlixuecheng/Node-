import request from '@/utils/request';

export function getBzj(obj) {
  return request({
    url: "/BThbzjsh/list",
    method: "post",
    data: obj
  })
}
export function getDetail(xmbh) {
  return request({
    url: "/BYcjxm/getJCjgs/" + xmbh,
    method: "get"
  })
}

export function doOver(data) {
  return request({
    url: "/BThbzjsh/thbzj/GetThrough",
    method: "post",
    data
  })
}