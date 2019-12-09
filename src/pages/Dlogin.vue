<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 11:07:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
  <div class="category">
    <Dloginn></Dloginn>
    <Dloginzhuti></Dloginzhuti>
 
  </div>
</template>

<script>
import Dloginn from '../components/Dloginn';
import Dloginzhuti from '../components/Dloginzhuti';

export default {
  name: '',
  data () {
    return {
    }
  },
  components:{
      Dloginn,Dloginzhuti
  }

}
</script>

<style scoped>
.category{
  width:100%;
  height:10rem;
}

</style>
