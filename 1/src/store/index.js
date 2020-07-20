import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import app from './modules/app'
import user from './modules/user'
import aliveRouter from './modules/aliveRouter'

Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  mutations,
  modules: {
    app,
    user,
    aliveRouter
  }
})

export default store
