import Vue from 'vue'
import App from './App.vue'
import virtualScroll from 'vue-virtual-infinite-scroll'
import 'vue-virtual-infinite-scroll/dist/css/vue-virtual-infinite-scroll.css'

Vue.component('virtual-list', virtualScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
