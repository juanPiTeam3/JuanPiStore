<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 11:07:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
    <Dregisets></Dregisets>
    <DregisetsZt></DregisetsZt>
  </div>
</template>

<script>
import Dregisets from '../components/Dregisets';
import DregisetsZt from '../components/DregisetsZt';


export default {
  name: '',
  data () {
    return {
    }
  },
  components:{
      Dregisets,DregisetsZt
  }

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

</style>
