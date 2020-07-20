import request from '@/utils/request'

export function getBm(obj) {
  return request({
    url: '/user/group/selectUserGroupPage',
    method: 'post',
    data: obj
  })
}
export function setBm(obj) {
  return request({
    url: '/user/group/update',
    method: 'post',
    data: obj
  })
}
export function addBm(obj) {
  return request({
    url: '/user/group/add',
    method: 'post',
    data: obj
  })
}
export function delBm(id) {
  return request({
    url: '/user/group/delete',
    method: 'post',
    data: {
      id
    }
  })
}

//权限相关
export function treeQuery(obj) {
  return request({
    url: '/permissionOne/findAllPermission',
    method: 'post',
    data: obj
  })
}
//权限相关
export function treeQuery1(obj) {
  return request({
    url: '/PermissionMh/findAllPermissionMh',
    method: 'post',
    data: obj
  })
}

export function treeSave(obj) {
  return request({
    url: '/Department/updateDepartmentPower',
    method: 'post',
    data: obj
  })
}
export function treeSave1(obj) {
  return request({
    url: '/PermissionMh/updatemhgl',
    method: 'post',
    data: obj
  })
}


export function accrQuery(bmid) {
  return request({
    url: '/permission/user2',
    method: 'get',
    params: {
      bmid
    }
  })
}

export function accrQuery1(bmid) {
  return request({
    url: '/CqjyMhgl/selectCqjyMhglById',
    method: 'post',
    data: {
      id: bmid
    }
  })
}
// export function accrQuery(id) {
//   return request({
//     url: '/Department/selectDepartmentPower',
//     method: 'post',
//     data: {
//       id
//     }
//   })
// }

//分配相关
export function getPower(groupid) {
  return request({
    url: '/user/group/SelectYesPowerByGroupId',
    method: 'post',
    data: {
      groupid
    }
  })
}
export function getNoPower(groupid, areacode) {
  return request({
    url: '/user/group/SelectNoYhz',
    method: 'post',
    data: {
      groupid,
      areacode
    }
  })
}
export function setPower(groupid, userIdList) {
  return request({
    url: '/user/group/updateGroupByUserIdList',
    method: 'post',
    data: {
      groupid,
      userIdList
    }
  })
}
export function setJobLiu(groupid, idlist) {
  return request({
    url: '/user/group/updateUserGroupRate',
    method: 'post',
    data: {
      groupid,
      idlist
    }
  })
}
