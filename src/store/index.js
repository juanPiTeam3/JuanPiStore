/*
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-27 16:06:08
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-02 16:01:18
 */
// /*
//  * @Description: 
//  * @Author: 是丽丽呀
//  * @Date: 2019-11-26 09:25:56
//  * @LastEditors: 是丽丽呀
//  * @LastEditTime: 2019-11-29 20:19:34
//  */
import Vue from 'vue';
import VueX from 'vueX';

Vue.use(VueX)

export default new VueX.Store({
    state:{
       footers:[
            {
                "spanclass":"icon-shouye2",
                "title":"首页"
            },
            {
                "spanclass":"icon-pinpaiqingcang",
                "title":"品牌清仓"
            },    
            {
                "spanclass":"icon-9",
                "title":"9块邮"
            },    
            {
                "spanclass":"icon-gouwuche",
                "title":"购物车"
            },   
            {
                "spanclass":"icon-wodedangxuan",
                "title":"我的卷皮"
            }
        ],
       isactive:0,
      // 销量
       sale:"",
      // 接收点击的是女装还是男装等等 
       type:"" ,
       num:0 
    },
    
    mutations:{
        // 点击事件获取点击的事件名,在详情页里点击销量的那个导航条
        changetype(state,typename){
            state.sale=typename;
            // console.log(state.sale);
        },
        dianjiya(state,type){
            state.type=type;
            // console.log(state.sale);
        },
        cteateNum(state,num){
            state.num=num;
            // console.log(state.num)
        }     
    },
    active:{}
})

// export default store;