/*
 * @Author: your name
 * @Date: 2019-11-25 19:47:35
 * @LastEditTime: 2019-12-08 16:20:01
 * @LastEditors: 王磊
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\eshopapp\src\store\index.js
 */

import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)
let store=new VueX.Store({
    state: {
         buyObj:{},
         userInfo:{},
         carsInfo:[],
         carsImg:[],
        totalMoney:0,
        carGoodsNum:0,
        goodsImgAndName:{},
        goodsId:"",
        goodsData:[],
        isactive:0,
        // 销量
         sale:"",
        // 接收点击的是女装还是男装等等 
         type:"" ,
         num:0 ,
         wenzi:'',
        isClass:false,
        isClass1:true,
        books:[],
        pay:[]

    },
  mutations:{
        goodsId(state,id){
        //用来获取商品的id
           state.goodsId=id;
        },
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
        }, 
         carGoods(state,goodsData){
           state.goodsData=goodsData;
           let littleMoney=0
           let arrImg=[];
           let goodsSum=0;
           for(let i in goodsData){
               littleMoney+=parseFloat(goodsData[i].num*goodsData[i].price);
               arrImg.push(goodsData[i].img);
               goodsSum+=parseFloat(goodsData[i].num);
               }
              state.totalMoney=littleMoney;
              state.carGoodsNum=goodsSum;
              state.carsImg=arrImg;
               console.log(state.totalMoney);
               console.log( state.carGoodsNum);
         },
        buyNum(state,purchase){
           state.buyObj=purchase;
         //   console.log( state.buyObj);
       },
       userInfo(state,info){
          state.userInfo=info;
         //  console.log(state.userInfo);
       },
       getCarData(state,carsInfo){
          
           state.carsInfo=carsInfo;
         //   console.log( state.carsInfo);
       },
       getMoney(state,data){
            state.totalMoney=data.totalMoney;
            state.carsImg=data.carsImg;
            state.carGoodsNum=data.carGoodsNum;
           
            // console.log(data.totalMoney);
            
       },
       goodsImgAndName(state,goodsObj){
         state.goodsImgAndName=goodsObj;
         //  console.log(state.goodsImgAndName);
       },
       HotAction(state,name){
        state.currtype = name;
    },
    
    change(state){
        let zi = document.getElementById("zi").innerHTML;
        if(zi!="编辑"){
            state.wenzi = "编辑";
            state.isClass = false;
            state.isClass1 = true;
        }else{
            state.wenzi = "完成";
            state.isClass = true;
            state.isClass1 = false;
            
        }
      },
      pay(state,shuju){
          state.pay = shuju;
      }
      
      },
      actions:{
         
      }
    
})
export default  store;
