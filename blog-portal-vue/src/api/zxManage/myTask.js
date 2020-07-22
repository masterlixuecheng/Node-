import request from '@/utils/request'

export function processStart(obj) {
  return request({
    url: '/activiti/start',
    method: 'get',
    params: obj
  })
}
export function processSh(obj) {
  return request({
    url: '/activiti/complete',
    method: 'get',
    params: obj
  })
}

export function proUpStatus(obj) {
  return request({
    url: '/news/UpStatus',
    method: 'post',
    data: obj
  })
}

export function processDel(bussinesskey, userId) {
  return request({
    url: '/activiti/delete',
    method: 'post',
    data: {
      bussinesskey,
      userId
    }
  })
}
export function getProcess(obj) {
  return request({
    url: '/activiti/taskList',
    method: 'post',
    data: obj
  })
}
export function getProSelect(id) {
  return request({
    url: '/activiti/flowElements',
    method: 'post',
    data: {
      id
    }
  })
}
export function getOverPro(obj) {
  return request({
    url: '/activiti/historyTask2',
    method: 'post',
    data: obj
  })
}
export function updateZt(obj) {
  return request({
    url: '/MHJjdt/PubAndDS/setPublishTimeAndDS',
    method: 'post',
    data: obj
  })
}
export function updateOutZt(id) {
  return request({
    url: '/CqjyCqxqgl/updateCqjyXqqfxxToZtById',
    method: 'post',
    data: {
      id
    }
  })
}
export function getYbProcess(obj) {
  return request({
    url: '/activiti/taskListComplete',
    method: 'post',
    data: obj
  })
}
export function ifJoint(obj) {
  return request({
    url: '/myActTask/add',
    method: 'post',
    data: obj
  })
}
export function EMSNotice(obj) {
  return request({
    url: '/yzm/content/getContent',
    method: 'post',
    data: obj
  })
}
export function sendCqws(obj) {
  return request({
    url: '/cqws/sendCqws',
    method: 'post',
    data: obj
  })
}

