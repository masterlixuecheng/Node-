import request from '@/utils/request'

export function getBm(obj) {
  return request({
    url: '/Department/selectDepartmentPage',
    method: 'post',
    data: obj
  })
}
export function setBm(obj) {
  return request({
    url: '/Department/updateDepartment',
    method: 'post',
    data: obj
  })
}
export function addBm(obj) {
  return request({
    url: '/Department/addDepartment',
    method: 'post',
    data: obj
  })
}
export function delBm(id) {
  return request({
    url: '/Department/deleteDepartment',
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
      id:bmid
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
export function getPower(deptid) {
  return request({
    url: '/user/SelectYesPowerByDeptId',
    method: 'post',
    data: {
      deptid
    }
  })
}
export function getNoPower() {
  return request({
    url: '/user/SelectNoPower',
    method: 'get'
  })
}
export function setPower(deptid, userIdList) {
  return request({
    url: 'user/updatePowerByUserIdList',
    method: 'post',
    data: {
      deptid,
      userIdList
    }
  })
}
