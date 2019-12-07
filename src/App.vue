<!--
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
  </div>
</template>

<script>

import Lfooter from './components/Lfooter';
export default {
  name: 'App',
  components:{
    Lfooter
  }
}
</script>

<style>
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


</style>
