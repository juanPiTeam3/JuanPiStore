
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 11:06:29
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
</div>
</template>

<script>
export default {
  data () {
    return {
      regiset:''
    }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.regiset{
  width:100%;
  height:100%;
  background: white;
}
.header{
  width:100%;
  height:3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 10px;
}
</style>
