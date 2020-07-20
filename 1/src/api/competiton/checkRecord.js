import request from '@/utils/request';

export function getRecord(obj) {
  return request({
    url: "/BThbzjsh/Bshjl/list",
    method: "post",
    data: obj
  })
}
