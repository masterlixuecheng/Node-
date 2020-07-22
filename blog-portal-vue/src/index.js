// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import "babel-polyfill";
import 'normalize.css/normalize.css'
import 'animate.css/animate.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import App from './App'
import store from './store'
import router from './router'
import "@/directive"
import '@/router/permission'
import '@/components'
// import 'ol/ol.css'

import 'whatwg-fetch'

// import '../static/znxdwebgis/jsts.min.js'
// import '../static/znxdwebgis/znxdmap.js'
// import '../static/znxdwebgis/znxdmap.css'
// import '../static/znxdwebgis/znxdwebgis.css'
// import '../static/znxdwebgis/znxdwebgis.js'

// window.jsts = require("jsts");

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Viewer);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
