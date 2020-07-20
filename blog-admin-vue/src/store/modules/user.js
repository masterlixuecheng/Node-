import {
  loginSecurity,
  loginByCode,
  loginByUsername,
  logout,
  getUserInfo,
  getBtnAuth
} from '@/api/login'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  Message
} from 'element-ui'

const user = {
  state: {
    token: getToken(),
    user: {},
    btnList: [],
    xzqh: "",
    nickname: "",
    userId: "",
    error: false,
    dbCount: 0,
    type: ""
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
      state.userId = user.uUser.id;
      state.nickname = user.uUser.nickname;
      state.xzqh = user.uUser.xzqh;
      state.type = user.uUser.type;
    },
    SET_ERROR: (state) => {
      state.error = true
    },
    SET_AUTH: (state, list) => {
      state.btnList = list
    }
  },

  actions: {
    // 登录
    loginSecurity({
      commit
    }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        let obj = {
          username: username,
          password: userInfo.password
        }
        loginSecurity(obj).then(response => {
          const data = response.data
          if (data.success) {debugger
            commit('SET_TOKEN', data.token)
            setToken(response.data.token)
            resolve()
          } else {
            Message.error(data.msg);
            reject()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    GetUserInfo({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data;
          if (data.success) {
            sessionStorage.setItem("xzqhOfLastUser", data.data.uUser.xzqh.split(',')[data.data.uUser.xzqh.split(',').length -1]);
            commit('SET_USER', data.data)
            resolve(state.token)
          } else {
            Message.error(data.msg);
            reject()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户按钮权限
    GetBtnAuth({
      commit,
      state
    }) {
      return new Promise((resolve, reject) => {
        getBtnAuth(state.userId).then(response => {
          const data = response.data;
          if (data.success) {
            commit('SET_AUTH', data.msg.split(","))
            resolve(state)
          } else {
            Message.error(data.msg);
            reject()
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出
    LogOut({
      commit,
      state
    }, backHome) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NAVBAR', [])
          removeToken()
          if (window.sessionStorage.getItem("isUnified")) {
            window.sessionStorage.removeItem("isUnified");
            if (backHome) {
              window.location.href = "http://218.201.104.126:8085";
            } else {
              window.location.href = "http://218.201.104.126:8085/sso/logout";
            }
            return;
          }
          location.reload();
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
