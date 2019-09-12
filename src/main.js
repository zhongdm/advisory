// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import cml from './plugins-custom/ConstantMesaage'
import JsEncrypt from 'jsencrypt'
import router from './router'
import store from '@/store'
import EventBus from './plugins-custom/SharedEventBus'
import '@/common/request.js'
import GLOBAL_ from '@/common/constant'
// import '@/assets/icon/iconfont.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// import VueFeatherIcon from 'vue-feather-icon'

Vue.prototype.GLOBAL = GLOBAL_
Vue.config.productionTip = false
// Vue.use(VueFeatherIcon)
Vue.use(cml)
Vue.use(EventBus)
Vue.use(Antd)
Vue.prototype.$jsEncrypt = JsEncrypt

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
