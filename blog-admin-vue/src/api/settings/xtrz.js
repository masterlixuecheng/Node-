import request from '@/utils/request'

export function xtrzSearch(obj) {
  return request({
    url: '/AuditLog/selectAuditLogPage',
    method: 'post',
    data: obj
  })
}

