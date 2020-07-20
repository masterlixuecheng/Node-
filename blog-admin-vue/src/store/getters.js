const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
  xzqh: state => state.user.xzqh,
  nickname: state => state.user.nickname,
  dbCount: state => state.user.dbCount,
  type: state => state.user.type,
  userId: state => state.user.userId,
  error: state => state.user.error,
  btnList: state => state.user.btnList,
  navBar: state => state.app.navBar,
  navOpen: state => state.app.navOpen,
  keepAliveList: state => state.aliveRouter.keepAliveList,
  visitedList: state => state.aliveRouter.visitedList
}
export default getters
