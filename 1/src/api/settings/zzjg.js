import request from '@/utils/request'

export function uploadBase64(obj) {
  return request({
    url: '/CqjyFz/file/ajax/upload_gpyFile',
    method: 'post',
    data: obj
  })
}

export function getChineseByXzqh(xzqh) {
  return request({
    url: '/Organization/selectOrganizationPostByXzqh',
    method: 'post',
    data: {
      xzqh
    }
  })
}
export function getNowRegion(code) {
  return request({
    url: '/Organization/selectOrganizationPostBj',
    method: 'post',
    data: {
      code
    }
  })
}
export function getNextRegion(code) {
  return request({
    url: '/Organization/selectOrganizationPostTree',
    method: 'post',
    data: {
      code
    }
  })
}
// export function getRegion(code) {
//   return request({
//     url: '/Organization/selectOrganizationGetTree?code=' + code,
//     method: 'get'
//   })
// }
export function getRegionByCode(code) {
  return request({
    url: '/Organization/selectOrganizationGetTreeByCode/' + code,
    method: 'get'
  })
}
export function getRegion() {
  return request({
    url: '/Organization/selectOrganizationGetTree',
    method: 'get'
  })
}
export function getSuperiorXzqh(xzqh) {
  return request({
    url: '/Organization/selectData',
    method: 'post',
    data: {
      xzqh
    }
  })
}
export function getSuperiorXzqhByJb(xzqh,jb) {
  return request({
    url: '/Organization/selectDataByJb',
    method: 'post',
    data: {
      xzqh,
      jb
    }
  })
}

export function setZzjg(obj) {
  return request({
    url: '/Organization/updateOrganization',
    method: 'post',
    data: obj
  })
}
export function addZzjg(obj) {
  return request({
    url: '/Organization/addOrganization',
    method: 'post',
    data: obj
  })
}
export function delZzjg(id) {
  return request({
    url: '/Organization/deleteOrganization',
    method: 'post',
    data: {
      id
    }
  })
}
