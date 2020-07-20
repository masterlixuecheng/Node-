import request from '@/utils/request'

// export function loginSecurity(username, password) {
//   return request({
//     url: '/user/login',
//     method: 'post',
//     data: {
//       username,
//       password
//     }
//   })
// }
export function loginSecurity(userinfo) {
  return request({
    url: '/user/login',
    method: 'post',
    data: userinfo
  })
}
// export function loginSecurity(name, passwd, captcha) {
//   return request({
//     url: '/security/login',
//     method: 'get',
//     params: {
//       name,
//       passwd,
//       captcha
//     }
//   })
// }

export function loginByCode(userinfo) {
  return request({
    url: '/OauthAccessToken/oauth',
    method: 'post',
    data: userinfo
  })
}

export function loginByUsername(name, passwd) {
  return request({
    url: '/user/login',
    method: 'get',
    params: {
      name,
      passwd
    }
  })
}


export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/queryBytoken',
    method: 'get',
    params: {
      token
    }
  })
}


// export function getBtnAuth(userid) {
//   return request({
//     url: '/permission/user2',
//     method: 'get',
//     params: {
//       userid
//     }
//   })
// }

export function getBtnAuth(userid) {
  return request({
    url: '/user/selectPowerByUserId',
    method: 'get',
    params: {
      userid
    }
  })
}

// export function getNav(token) {
//   return request({
//     url: '/permission/user',
//     method: 'get'
//   })
// }
export function getNav(token) {
  return request({
    url: '/permission/user1',
    method: 'get',
    params: {
      token
    }
  })
}

export function license() {
  return request({
    url: '/license',
    method: 'get'
  })
}

export function checkLicense(bm) {
  return request({
    url: '/importlicense/' + bm,
    method: 'get'
  })
}

export function revamp(obj) {
  return request({
    url: '/user/updatepassword',
    method: 'post',
    data: obj
  })
}
