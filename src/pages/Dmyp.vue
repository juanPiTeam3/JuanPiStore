<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-02 15:37:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
    <DmyjpHeader></DmyjpHeader>
    <Dladlzc></Dladlzc>
    <Dmyzj></Dmyzj>
    <Dmybanner></Dmybanner>
    <Dmydd></Dmydd>
    <Dmyqb></Dmyqb>
    <Dmyyqyl></Dmyyqyl>
    <Dmyzb></Dmyzb>
    <Dmyfooter></Dmyfooter>
  </div>
</template>

<script>
import DmyjpHeader from '../components/DmyjpHeader';
import Dladlzc from '../components/Dladlzc';
import Dmyzj from '../components/Dmyzj';
import Dmybanner from '../components/Dmybanner';
import Dmydd from '../components/Dmydd';
import Dmyqb from '../components/Dmyqb';
import Dmyyqyl from '../components/Dmyyqyl';
import Dmyzb from '../components/Dmyzb';
import Dmyfooter from '../components/Dmyfooter';

export default {
  name: '',
  data () {
    return {
      xian:""
    }
  },
  components:{
      DmyjpHeader,Dladlzc,Dmyzj,Dmybanner,Dmydd,Dmyqb,Dmyyqyl,Dmyzb,Dmyfooter
  },
  
  

}
</script>

<style>
html{
  font-size:20px;
}
.category{
  width:100%;
  height:100%;
}
.sdjnb{
  display:block;
}
</style>
