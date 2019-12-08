<!--
 * @Author: your name
 * @Date: 2019-11-26 11:06:12
 * @LastEditTime: 2019-12-08 16:26:27
 * @LastEditors: 是丽丽呀
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\App.vue
 -->
<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
  height: 100%;
}
body{
  font-size: 14px;
  /* height: 100%;
  display: -webkit-flex;
  flex-direction:column; */
 
  /* background:#f6f7f9; */
}
#app { 
  /* margin-top: 5px; */
}
ul,li{
  list-style: none;
}
a{
	text-decoration: none;
}

img{
	border:none;
	display: block;
}
.mint-cell-wrapper{
  background-image: none !important;
}
.component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .3s ease; */
    transition: all .3s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform:translateX(-100%);
}
</style>
