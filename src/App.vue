<!--
<<<<<<< HEAD
 * @Author: your name
 * @Date: 2019-11-26 11:06:12
 * @LastEditTime: 2019-12-03 10:22:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\App.vue
 -->
<template>
  <div id="app">
   <router-view/>
=======
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:25:56
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-05 20:45:20
 -->
<template>
  <div id="app">
    <transition name="component-fade" mode="in-out">
        <router-view/>
    </transition>
    <Lfooter id="myfooter"></Lfooter>
>>>>>>> e2d52e58be5bb0f4c36971943d1843ed665beb2b
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'App'
=======

import Lfooter from './components/Lfooter';
export default {
  name: 'App',
  components:{
    Lfooter
  }
>>>>>>> e2d52e58be5bb0f4c36971943d1843ed665beb2b
}
</script>

<style>
<<<<<<< HEAD
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
  height: 100%;
  display: -webkit-flex;
   flex-direction:column;
 
   /* background:#f6f7f9; */
}
/* #app { 
  margin-top: 5px;
} */
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

=======
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body, p, ul, ol, dl, dd, h1, h2, h3, h4, h5, h6, hr, td, input, textarea {
  margin: 0;
  padding: 0; }

ul, ol, li {
  list-style: none; }

a {
  text-decoration: none; }

img {
  border: none; }

body {
  font-family: "微软雅黑"; 
  background-color: #eff3f6;
  }
  html{
    font-size: 26.67rem;
  }
  #myfooter{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
  }
.component-fade-enter-active, .component-fade-leave-active {
    /* transition: opacity .3s ease; */
    transition: all .3s ease; 
}
.component-fade-enter, .component-fade-leave-to {
    /* opacity: 0; */
    transform:translateX(-100%);
}


>>>>>>> e2d52e58be5bb0f4c36971943d1843ed665beb2b
</style>
