
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:58:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
 <div class="header">
     <div class="left"><img src="../assets/imgs/ziyuan.png" alt=""></div>
     <p>个人中心</p>
     <router-link to="./Dxiugai">
     <div class="left"><img src="../assets/imgs/shezhi.png" alt=""></div>
     </router-link>
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
    height:2rem;
    background: #fc684e;
    font-size:20px;
    color:white;
    display:flex;
    align-items: center;
    justify-content:space-between;
    .left img{
        width:1.5rem;
        height:1.5rem;
        margin:0 10px;
    }
}
</style>
