import request from '@/utils/request'

export function treeQuery() {
  return request({
    url: '/activitiuser/findProcessDefinition',
    method: 'get'
  })
}
// 点击查询
export function clickSearch(processinfo) {
  return request({
    url: '/node/findByProcessinfo',
    method: 'post',
    data: {
      processinfo
    }
  })
}
//点击添加/node/add
export function clickAdd(url, obj) {
  return request({
    url: url,
    method: 'post',
    data: obj
  })
}
// 流程设置保存按钮
export function setProcess(obj) {
  return request({
    url: '/process/glUserProcess',
    method: 'post',
    data: obj
  })
}
// 已设置此用户的查询接口：
export function lcglFindUsers(obj) {
  return request({
    url: '/process/findProcessUsers',
    method: 'post',
    data: obj
  })
}

// 是否例外
export function updateLiWai(obj) {
  return request({
    url: '/process/updateSflw',
    method: 'post',
    data: obj
  })
}

// 这个是关联用户出的框只用在流程管理页面
export function listUsers(obj) {
  return request({
    url: '/process/listProcess',
    method: 'post',
    data: obj
  })
}
// 这个是工作流中，根据行政区划查询关联用户出的框
export function listUsersByXzqh(obj) {
  return request({
    url: '/process/listByAreaCode',
    method: 'post',
    data: obj
  })
}
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
export function jointAdd(obj) {
  return request({
    url: '/myActNode/addList',
    method: 'post',
    data: obj
  })
}
export function getJoint(obj) {
  return request({
    url: '/myActNode/findPage',
    method: 'post',
    data: obj
  })
}
export function setJoint(obj) {
  return request({
    url: '/myActNode/update',
    method: 'post',
    data: obj
  })
}
export function setTj(obj) {
  return request({
    url: '/process/updateTj',
    method: 'post',
    data: obj
  })
}
