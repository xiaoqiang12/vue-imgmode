import Vue from 'vue'
import App from './App.vue'
import VueImgmode from './lib/index.js'
Vue.use(VueImgmode)

new Vue({
  el: '#app',
  render: h => h(App)
})
