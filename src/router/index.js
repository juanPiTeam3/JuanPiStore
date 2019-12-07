/*
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:25:56
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-04 21:23:39
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Liindex from '@/page/Liindex'
import LshopPage from '@/page/LshopPage';
import LmainPage from '@/page/LmainPage';
import LsearchPage from '@/page/LsearchPage';


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
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
