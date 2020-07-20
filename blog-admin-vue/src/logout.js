import Vue from 'vue'
import logout from './logout.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
    store,
    render: function (h) {
        return h(logout)
    },
    mounted() {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    }
}).$mount('#logout')