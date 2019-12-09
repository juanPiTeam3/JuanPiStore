
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:58:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="header">
     <div class="bottom">
         <div class="big">
            <img src="../assets/imgs/juanpi.png" alt="">
            <p class="right">关于卷币</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/dazhuanpan_-.png" alt="">
            <p class="right">卷币大转盘</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/zhaoshang.png" alt="">
            <p class="right">开放招商</p>
         </div>
         <div class="big">
            <img src="../assets/imgs/yijianfankui.png" alt="">
            <p class="right">意见反馈</p>
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
    .bottom{
        display: flex;
        align-items: center;
        justify-content: space-between;
    .big{
        width:20%;
        height:100%;
        color:#6b6b6b;
        font-size:14px;
        text-align: center;
        margin-bottom:10px;
        
        img{
            display:block;
            width:30px;
            height:30px;
            margin:2px auto;
            }
        }
    }
}
</style>
