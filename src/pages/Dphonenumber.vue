<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-11-28 18:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
    <Dphonnum></Dphonnum>
    <Dphonezt></Dphonezt>
 
  </div>
</template>

<script>
import Dphonnum from '../components/Dphonnum';
import Dphonezt from '../components/Dphonezt';

export default {
  name: '',
  data () {
    return {
    }
  },
  components:{
      Dphonnum,Dphonezt
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
  background: white;
}

</style>
