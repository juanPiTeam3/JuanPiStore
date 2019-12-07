/*
<<<<<<< HEAD
 * @Author: your name
 * @Date: 2019-11-26 11:06:12
 * @LastEditTime: 2019-12-06 20:47:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\main.js
=======
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:25:56
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-04 17:57:41
>>>>>>> yangli
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
<<<<<<< HEAD
import router from './router'
import ElementUI from 'element-ui';
 import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css';
import 'mint-ui/lib/style.css';
import axios from 'axios';
import MintUI from 'mint-ui' ;
import store from './store';
import Distpicker from 'v-distpicker'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: 'b52e7399c60fb5165483f9a0d831b5a2',
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PlaceSearch', 'AMap.Geolocation', 'AMap.Geocoder'],
  v: '1.4.4',
  uiVersion: '1.0'
})

 
Vue.component('v-distpicker', Distpicker)


Vue.config.productionTip = false;
axios.defaults.baseURL = '/api/'; 
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(axios);
=======
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
>>>>>>> yangli

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
