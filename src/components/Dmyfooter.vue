
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 13:42:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="header">
     <div class="bottom">
         <div class="big">
            <img src="../assets/imgs/shouye.png" alt="">
            <p class="right">首页</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/pinpaiqingcang.png" alt="">
            <p class="right">品牌清仓</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/icon-test.png" alt="">
            <p class="right">9块邮</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/gouwuche.png" alt="">
            <p class="right">购物车</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/wode.png" alt="">
            <p class="right">我的卷皮</p>
         </div>
     </div>
 </div>
</template>

<script scoped>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped="" type="text/css">
.header{
    width:100%;
    margin-bottom:10px;
    // position:fixed;
    // left:0px;
    // top:93%;
    background: white;
    margin-top:12px;
    .bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
    .big{
        width:20%;
        height:100%;
        color:black;
        font-size:14px; 
        text-align: center;
        line-height: 100%;s
        
        img{
            display:block;
            width:25px;
            height:25px;
            margin:2px auto;
            }
        }
    }
}
</style>
