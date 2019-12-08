/*
 * @Author: your name
 * @Date: 2019-11-26 11:06:12
 * @LastEditTime: 2019-12-06 16:23:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\router\index.js
 */
import Vue from 'vue'

import LdetailPage from '@/pages/LdetailPage'
import loginPage from '@/pages/loginPage'
import LpicturePage from '@/pages/LpicturePage'
import LpurchasePage from '@/pages/LpurchasePage'
import LaddressPage from '@/pages/LaddressPage'
import LcarGoodsPage from '@/pages/LcarGoodsPage'
import LpayMoneyPage from '@/pages/LpayMoneyPage';
import Liindex from '@/page/Liindex'
import LshopPage from '@/page/LshopPage';
import LmainPage from '@/page/LmainPage';
import LsearchPage from '@/page/LsearchPage';
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
let router= new Router({
  routes: [
    {
      path: '/',
      name: 'LpayMoneyPage',
      component: LpayMoneyPage
    },
    {
      path: '/LdetailPage',
      name: 'LdetailPage',
      component: LdetailPage
    },
    {
      path: '/loginPage/:from',
      name: 'loginPage',
      component: loginPage,
      props:true

    },
    {
      path: '/LpurchasePage/',
      name: 'LpurchasePage',
      component: LpurchasePage,
    
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/LpicturePage',
      name: 'LpicturePage',
      component: LpicturePage
    },
    {
      path: '/LaddressPage',
      name: 'LaddressPage',
      component: LaddressPage
    },
    {
      path: '/LcarGoodsPage',
      name: 'LcarGoodsPage',
      component: LcarGoodsPage
    },
    {
      path: '/LpayMoneyPage',
      name: 'LpayMoneyPage',
      component: LpayMoneyPage
    },
    {
      path: '/',
      name: 'Liindex',
      component: Liindex
   },
   {
      path: '/LshopPage/:isshopname',
      name: 'LshopPage',
      component: LshopPage
  },
  {
    path: '/LmainPage',
    name: 'LmainPage',
    component: LmainPage
  },
  {
    path: '/LsearchPage',
    name: 'LsearchPage',
    component: LsearchPage,
    // 路由守卫，让其不能搜索商品
    // beforeEnter(to,from,next){
    //   if(!localStorage.getItem('name')){
    //     next('/Dlogin')
    //   }
    //   next()
    // }
  }

  ]
})
router.beforeEach((to,from,next)=>{
   if(to.meta.requireAuth){
    
      if(localStorage.getItem('username')==null){
         next('/loginPage'+to.fullPath);
      }else{
        // console.log(from);
        // console.log(to);
        // if()
          next();
      }
  }else{
     next();
  }
});

export default router;




