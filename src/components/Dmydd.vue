
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:57:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="header">
     <div class="top">
         <p>我的订单</p>
         <p class="right">全部订单></p>
     </div>
     <hr>
     <div class="bottom">
         <div class="big">
            <img src="../assets/imgs/daifukuan.png" alt="">
            <p class="right">待付款</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/daichengtuan.png" alt="">
            <p class="right">待成团</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/daishouhuo.png" alt="">
            <p class="right">待收货</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/daipingjia.png" alt="">
            <p class="right">待评价</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/shouhou.png" alt="">
            <p class="right">退款/售后</p>
         </div>
     </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.header{
    width:100%;
    margin-bottom:10px;
    background:white;
    P{
        margin-top:15px;
    }
    .top{
        display:flex;
        align-items: center;
        justify-content: space-between;
        color:#2e2e2e;
        font-size:16px;
        margin:0 10px;
        .right{
            color:#959595;
        }
    }
    hr{
        width:95%;
        margin:0 10px;
        margin-top:20px;
    }
    .bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
    .big{
        width:20%;
        height:100%;
        color:#6b6b6b;
        font-size:16px;
        text-align: center;
        margin-top:10px;
        
        img{
            display:block;
            width:30px;
            height:30px;
            margin:0 auto;
            }
        }
    }
}
</style>
