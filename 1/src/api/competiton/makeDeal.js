import request from '@/utils/request';

export function getMakeDeal(url, obj) {
  return request({
    url: "/BYcjxm/" + url,
    method: "post",
    data: obj
  })
}
export function getMakeDeal2(url,obj) {
  return request({
    // url: "/BYcjxm/querylist",
    url,
    method: "post",
    data: obj
  })
}

