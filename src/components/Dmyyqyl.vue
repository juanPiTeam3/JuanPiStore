
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-26 19:12:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="header">
     <div class="top">
         <p>邀请有礼</p>
         <p class="right">10元无门槛，上不封顶></p>
     </div>
     <hr>
     <div class="top">
         <p>9块邮</p>
         <p class="right">买到就是赚到></p>
     </div>
     <hr>
     <div class="top">
         <p>签到领现金</p>
         <p class="right">></p>
     </div>
     <hr>
     <div class="top">
         <p>品牌特价</p>
         <p class="right">超值好货任你挑></p>
     </div>
     <hr>
     <div class="top">
         <p>尾货清仓</p>
         <p class="right">></p>
     </div>
     <hr>
     <div class="top">
         <p>限时秒杀</p>
         <p class="right">></p>
     </div>
     <hr>
     <div class="top">
         <p>客服中心</p>
         <p class="right">></p>
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
        margin:0 10px;
        margin-top:20px;
    }
}
</style>
