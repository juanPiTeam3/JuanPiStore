<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:41:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
    <div class="header">
      <router-link to="/Dmyp">
      <p>X</p>
      </router-link>
      <p>{{regiset}}</p>
    </div>
    <div class="tupian">
      <h2>卷皮</h2>
      <p>JUANPI.COM</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      regiset:'没有账号？注册'
    }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.regiset{
  width:100%;
  // height:100%;
  overflow: hidden;
  background: white;
  .tupian{
    width:100%;
    height:1.5rem;
    background: orangered;
    color:white;
    font-size:40px;
    text-align: center;
  }
}
.header{
  width:100%;
  height:.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 auto;
  font-size:20px;
  color:white;
  background:orangered;
}
</style>
