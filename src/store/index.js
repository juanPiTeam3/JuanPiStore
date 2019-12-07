/*
 * @Author: your name
 * @Date: 2019-11-25 19:47:35
 * @LastEditTime: 2019-12-06 10:01:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\eshopapp\src\store\index.js
 */

import Vue from 'vue'
import VueX from 'vuex'


Vue.use(VueX)
import axios from "axios";
export default new VueX.Store({
    state: {
         buyObj:{},
         userInfo:{},
         carsInfo:[],
         carsImg:[],
        totalMoney:0,
        carGoodsNum:0,
        goodsImgAndName:{},
        goodsId:"002",
        goodsData:[]
      },
      mutations:{
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
       }
      
      },
      actions:{
         // getCarData(context){
         //    axios.get('/purchaseCar')
         //    .then(res=>{
         //       // console.log(res.data);
         //       let arr=res.data;
         //       let littleMoney=0
         //       let arrImg=[];
         //       let goodsSum=0;
         //     for(let i in arr){
         //         littleMoney+=parseFloat(arr[i].num*arr[i].price);
         //         arrImg.push(arr[i].img);
         //         goodsSum+=parseFloat(arr[i].num);
         //        }
         //       context.commit('getCarData',res.data);
         //       context.commit('getMoney',{
         //          totalMoney:littleMoney,
         //          carsImg:arrImg,
         //          carGoodsNum:goodsSum
         //       });
               
         //    })
         //    .catch(err=>{
         //          console.log(err);
         //    })
         // }
      }
    
})
