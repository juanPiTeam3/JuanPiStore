
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 08:20:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
    <div class="header">
      <p @click="back">＜</p>
      <router-link to="/Dregiset">
      <p>{{regiset}}</p>
      </router-link>
    </div>
    <hr>
</div>
</template>

<script>
export default {
  data () {
    return {
      regiset:'已有账号？登陆'
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
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
  width:95%;
  height:3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 10px;
}
</style>
