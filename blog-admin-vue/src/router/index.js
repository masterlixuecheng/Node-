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
  {
    path: '/login',
    hidden: true,
    component: () =>
      import("@/views/login/login")
  },
  {
    path: '/',
    hidden: true,
    component: Layout,
    redirect: '/home'
  },
  {
    path: '/home',
    component: Layout,
    redirect: '/home/home',
    meta: {
      title: '首页',
      icon: "el-icon-star-off"
    },
    children: [{
      path: 'home',
      component: () =>
        import("@/views/home/home"),
      name: 'home',
      meta: {
        title: '首页',
        icon: 'home'
      }
    }]
  }, {
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
  },
  {
    path: '/settings',
    component: Layout,
    redirect: '/settings/zzjg',
    meta: {
      title: '系统设置',
      icon: 'el-icon-setting'
    },
    children: [{
        path: 'zzjg',
        component: () =>
          import("@/views/settings/zzjg"),
        name: 'zzjg',
        meta: {
          title: '组织机构',
          icon: ''
        }
      }, {
        path: 'bmgl',
        component: () =>
          import("@/views/settings/bmgl"),
        name: 'bmgl',
        meta: {
          title: '角色管理',
          icon: ''
        }
      },{
        path: 'zhgl',
        component: () =>
          import("@/views/settings/zhgl"),
        name: 'zhgl',
        meta: {
          title: '账号管理',
          icon: ''
        }
      }, {
        path: 'yhgl',
        component: () =>
          import("@/views/settings/yhgl"),
        name: 'yhgl',
        meta: {
          title: '用户管理',
          icon: ''
        }
      }, {
        path: 'source',
        component: () =>
          import("@/views/settings/source"),
        name: 'source',
        meta: {
          title: '资源管理',
          icon: ''
        }
      },  {
        path: 'mhxx',
        component: () =>
          import("@/views/settings/mhxx"),
        name: 'mhxx',
        meta: {
          title: '门户信息',
          icon: ''
        }
      }, {
        path: 'mhxxDetail/:isEdit/:id',
        component: () =>
          import("@/views/settings/mhxxDetail"),
        name: 'mhxxDetail',
        hidden: true,
        meta: {
          title: '门户信息详情',
          icon: ''
        }
      },
      {
        path: 'htxx',
        component: () =>
          import("@/views/settings/htxx"),
        name: 'htxx',
        meta: {
          title: '后台信息',
          icon: ''
        }
      }, {
        path: 'htxxDetail/:data',
        component: () =>
          import("@/views/settings/htxxDetail"),
        name: "htxxDetail",
        hidden: true,
        meta: {
          title: "后台信息详情页",
          icon: ''
        }
      }, {
        path: 'mhSource/:type?',
        component: () =>
          import("@/views/settings/mhsource"),
        name: 'mhSource',
        meta: {
          title: '门户资源管理',
          icon: ''
        }
      }
    ]
  },
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
  // scrollBehavior(to,from,savePosition){
  //   
  //   if(savePosition){
  //     return savePosition
  //   }else{
  //     return { x:0 , y:0 }
  //   }
  // },

  routes: constantRouterMap
})
