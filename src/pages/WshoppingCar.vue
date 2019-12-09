<!--
 * @Description: 
 * @Author: 王磊
 * @Date: 2019-11-27 19:58:15
 * @LastEditors: 王磊
 * @LastEditTime: 2019-12-04 20:53:50
 -->
<template>
    <div>
        <WshoppCar1></WshoppCar1>
        <WshoppCar2></WshoppCar2>
        <LyFooter  v-bind:class="{last: isShow}"></LyFooter>      
    </div>
</template>

<script>
import WshoppCar1 from '../components/WshoppCar1'
import WshoppCar2 from '../components/WshoppCar2'
import LyFooter from '../components/LyFooter'
export default {
    name:"WshoppingCar",
    data() {
        return {
            isShow:false
        }
    },
    components:{
        WshoppCar1,WshoppCar2,LyFooter
    },
   mounted(){
       let path= this.$route.query.path;
    //    console.log(path);
       if(path=='WshoppingCar'){
              this.isShow=true;
       }
   }
}
</script>

<style scoped>
.last{
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>