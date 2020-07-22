import Vue from 'vue'
import Router from 'vue-router'
const Layout = () =>
  import("@/views/layout/layout_horizontal");
const InnerLayout = () =>
  import("@/views/layout/inner_layout");

Vue.use(Router)

// 解决点击当前页面路由控制台报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export const constantRouterMap = [
  // {
  //   path: '/login',
  //   hidden: true,
  //   component: () =>
  //     import("@/views/login/login")
  // },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      component: () =>
        import("@/views/home"),
      name: 'home',
      meta: {
        title: '首页',
        icon: 'home'
      }
    }, {
      path: 'detail/:id',
      component: () =>
        import("@/views/home_detail"),
      name: 'homeDetail',
      hidden: true,
      meta: {
        title: '文章详情',
        icon: ''
      }
    }]
  }, 
  {
    path: '/zxManage',
    component: Layout,
    redirect: '/zxManage/newsCenter',
    meta: {
      title: '资讯管理',
      icon: 'el-icon-tickets'
    },
    children: [{
      path: 'newsCenter',
      component: () =>
        import("@/views/zxManage/zxgl"),
      name: 'newsCenter',
      meta: {
        keepAlive: true,
        title: '新闻中心',
        icon: ''
      }
    }, {
      path: 'notice',
      component: () =>
        import("@/views/zxManage/zxgl"),
      name: 'notice',
      meta: {
        keepAlive: true,
        title: '通知公告',
        icon: ''
      }
    }, {
      path: 'zxglDetail/:parent/:name/:id/:isEdit',
      component: () =>
        import("@/views/zxManage/zxglDetail"),
      name: 'zxglDetail',
      hidden: true,
      meta: {
        title: '资讯管理信息',
        icon: ''
      }
    }]
  }
]
export default new Router({
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  },
  routes: constantRouterMap
})
