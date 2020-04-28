import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//create global filer
Vue.filter('snippet', val => {
  if(!val || typeof(val) != 'string') return ''
  val = val.slice(0,50) + '...'
  console.log(val.length)
  return val
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
