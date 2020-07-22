import router from '../router'
import store from '../store'
import {
  Message
} from 'element-ui'
import {
  getToken
} from '@/utils/auth'

const whiteList = ['/login', '/sso/logout']

router.beforeEach((to, from, next) => {
  next()
  // if (getToken()) {
  //   if (to.path === '/login') {
  //     next({
  //       path: '/'
  //     })
  //   } else {
  //     if (store.getters.navBar.length === 0) {
  //       debugger
  //       store.dispatch('GetUserInfo').then(res => {
  //         store.dispatch('GetNav', res).then(() => {
  //           store.dispatch('GetBtnAuth').then(() => {
  //             if (window.location.search) {
  //               window.location.href = window.location.href.replace(
  //                 window.location.search,
  //                 ""
  //               );
  //             }
  //             next();
  //           });
  //         }).catch(() => {
  //           store.dispatch('LogOut').then(() => {
  //             Message.error('获取用户信息失败')
  //             next({
  //               path: '/login'
  //             })
  //           })
  //         });
  //       }).catch(() => {
  //         store.dispatch('LogOut').then(() => {
  //           Message.error('验证失败, 请重新登录')
  //           next({
  //             path: '/login'
  //           })
  //         })
  //       })
  //     } else {
  //       next()
  //     }
  //   }
  // } else {
  //   let search = window.location.search.split("?");
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else if (search.length == 2) {
  //     let obj = {};
  //     let arr = search[1].split("&");
  //     window.sessionStorage.setItem("isUnified", true);
  //     //统一登录-code登录
  //     if (arr.some(a => a.split("=")[0] == "code")) {
  //       obj.code = arr.filter(a => a.split("=")[0] == "code")[0].split("=")[1];
  //       store.dispatch("loginByCode", obj)
  //         .then(res => {
  //           router.push({
  //             path: "/"
  //           });
  //         })
  //         .catch(error => {
  //           Message.error("登录失败");
  //         });
  //     } else if (arr.some(a => a.split("=")[0] == "name")) {
  //       //统一登录-用户名密码登录
  //       obj.username = arr.filter(a => a.split("=")[0] == "name")[0].split("=")[1];
  //       obj.password = arr.filter(a => a.split("=")[0] == "passwd")[0].split("=")[1];
  //       store.dispatch("loginByUsername", obj)
  //         .then(res => {
  //           router.push({
  //             path: "/"
  //           });
  //         })
  //         .catch(error => {
  //           Message.error("登录失败");
  //         });
  //     }
  //   } else {
  //     next('/login')
  //   }
  // }
})
