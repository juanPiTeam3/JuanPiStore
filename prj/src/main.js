/*
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:25:56
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-04 17:57:41
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import Mint from 'mint-ui';
import './font/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI);
Vue.use(Mint);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
