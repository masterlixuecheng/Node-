import request from '@/utils/request';

export function postMethod(url, obj) {
  return request({
    url,
    data: obj,
    method: 'post'
  })
}
export function getMethod(url, obj) {
  return request({
    url,
    params: obj
  })
}
export function yqljGet() {
  return request({
    url: "/CqjyMhglYqlj/selectCqjyMhglYqljPage",
    method: "post",
    data: {
      pageNo: 1,
      pageSize: 8
    }
  })
}
export function idSearch(obj) {
  return request({
    url: '/CqjyCqzcgl/selectCqjyCqzcglByIdAndZcgltype',
    method: "post",
    data: obj
  })
}
export function getRegion() {
  return request({
    url: '/Organization/selectOrganizationGetTree',
    method: 'get'
  })
}
export function getShList(obj) {
  return request({
    url: '/activiti/historyTask2',
    method: 'post',
    data: obj
  })
}
export function getBmsh(obj) {
  return request({
    url: '/dzda/bm/bmList',
    method: 'post',
    data: obj
  })
}
export function getJj(obj) {
  return request({
    url: '/BZzjjxm/getJBidinfoList',
    method: 'post',
    data: obj
  })
}
export function getCjxx(xmbh) {
  return request({
    url: '/BYcjxm/getJCjgs/' + xmbh,
    method: 'get'
  })
}
export function getHtxx(xmbh) {
  return request({
    url: '/dzda/cj/htxx',
    method: 'post',
    data: {
      xmbh
    }
  })
}
export function getJsxx(xmbh) {
  return request({
    url: '/dzda/cj/jsxx',
    method: 'post',
    data: {
      xmbh
    }
  })
}
export function getJzxx(xmbh) {
  return request({
    url: '/CqjyJzsgl/selectCqjyJzsglAndCqjyTdxxByXmbh',
    method: 'post',
    data: {
      xmbh
    }
  })
}

//电子档案 - 导出
export function getDc(xmbh) {
  return request({
    url: '/dzda/bm/bmListExcel?xmbh=' + xmbh,
    method: 'get'
  })
}