const aliveRouter = {
  state: {
    singleAlive: false,
    visitedList: [],
    keepAliveList: []
  },
  mutations: {
    SET_SINGLE(state, single) {
      state.singleAlive = single;
    },
    ADD_VISITED(state, view) {
      if (state.visitedList.some(v => v.path === view.path)) {
        return
      }
      if (state.singleAlive) {
        state.visitedList = [];
      }
      state.visitedList.push(Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      }));
      if (view.meta.keepAlive) {
        if (state.singleAlive) {
          state.keepAliveList = [];
        }
        state.keepAliveList.push(view.name)
      }
    },
    DEL_VISITED(state, name) {
      for (let [i, v] of state.visitedList.entries()) {
        if (v.name === name) {
          state.visitedList.splice(i, 1);
          break
        }
      }
      for (let i of state.keepAliveList) {
        if (i === name) {
          let index = state.keepAliveList.indexOf(i);
          state.keepAliveList.splice(index, 1);
          break
        }
      }
    }
  },
  actions: {
    addVisited({
      commit
    }, view) {
      commit('ADD_VISITED', view)
    },
    delVisited({
      commit
    }, name) {
      commit('DEL_VISITED', name)
    }
  }
}

export default aliveRouter
