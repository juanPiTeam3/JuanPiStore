
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:58:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="header">
     <div class="top">
         <p>我的订单</p>
         <p class="right">></p>
     </div>
     <hr>
     <div class="bottom">
         <div class="big">
             <p>0</p>
            <p class="right">卷币</p>
         </div>
         <div class="big">
             <p>0</p>
            <p class="right">优惠卷</p>
         </div>
         <div class="big">
             <p>0</p>
            <p class="right">余额</p>
         </div>
         <div class="big">
             <p>0</p>
            <p class="right">签到领钱</p>
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
    .top{
        display:flex;
        align-items: center;
        justify-content: space-between;
        color:#2e2e2e;
        font-size:16px;
        margin:0px 10px;
        P{
            margin-top:15px;
        }
        .right{
            color:#959595;
        }
    }
    hr{
        width:95%;
        margin:10px 10px;
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
        margin-bottom:10px;
        }
    }
}
</style>
