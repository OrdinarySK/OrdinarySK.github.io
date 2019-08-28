// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/styles/iconfont.css'
import './assets/styles/reset.css'


import Cesium from 'cesium/Cesium'
import widgets from 'cesium/Widgets/widgets.css'
import cmpjs from './commonJs/CesiumPlugin'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false

Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets
Vue.prototype.$cmpjs = cmpjs
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.use(GeminiScrollbar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
