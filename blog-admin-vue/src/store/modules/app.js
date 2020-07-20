import {
  getNav
} from '@/api/login'
import {
  constantRouterMap
} from "@/router"
const app = {
  state: {
    navOpen: false,
    swzc: [],
    // btnList: [],s
    // navBar: [],
    navBar: constantRouterMap
  },
  mutations: {
    SET_NAVOPEN: (state) => {
      state.navOpen = !state.navOpen;
    },
    // SET_AUTH: (state, list) => {
    //   state.btnList = list
    // }
  },
  actions: {
    //获取nav
    // GetNav({ commit }, token) {
    //   return new Promise((resolve, reject) => {
    //     getNav(token).then(response => {
    //       const data = response.data
    //       if (data.success) {
    //         commit('SET_NAVBAR', data.data);
    //         // commit('SET_AUTH', data.msg.split(","))
    //         resolve(data.data)
    //       } else {
    //         reject()
    //       }
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // }
  }
}

export default app
