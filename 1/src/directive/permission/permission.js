import store from '@/store'

export default {
  inserted(el, binding, vnode) {
    const {
      value
    } = binding
    const btns = store.getters.btnList

    if (btns instanceof Array && btns.length > 0) {
      if (value instanceof Array && btns.length > 0) {
        if (
          value.every(v => {
            return btns.indexOf(v) == -1
          })) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      } else {
        if (btns.indexOf(value) == -1) {
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    } else {
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}
