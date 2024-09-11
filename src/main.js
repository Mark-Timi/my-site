const Vue=require('vue')['default']
// import Vue from 'vue'
import App from './App.vue'
import './styles/global.less'

//mock
import '@/mock'
//路由
import router from './router'
//自定义指令
import loading from './directives/loading' 




import showPopup from './utils/showPopup.js'
//组件的__proto__也可以调用么
Vue.prototype.$showPopup=showPopup


Vue.directive('loading',loading)



new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')


