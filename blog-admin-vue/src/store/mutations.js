const mutations = {
  SET_TOKEN: (state, token) => {
    state.user.token = token
  },
  SET_NAVBAR: (state, navBar) => {
    state.app.navBar = navBar
  },
  SET_Db: (state, dbCount) => {
    state.user.dbCount = dbCount
  },
  SAVE_SWZC(state, swzc) {
    // console.log(11,swzc);
    if (swzc instanceof Array) {
      state.app.swzc = swzc
    } else {
      state.app.swzc = [swzc]
    }
  }
}
export default mutations
