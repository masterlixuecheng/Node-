import request from '@/utils/request';

export function getPositiveSpot(url, obj) {
  return request({
    url: "/BZzjjxm/" + url,
    method: "post",
    data: obj
  })
}
