<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-09 09:17:12
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:34:43
 -->
<template>
    <div id="box">
        <LbackHeader></LbackHeader>
        <div id="center">
            <LmainGirl></LmainGirl>
            <Ltitle></Ltitle>
            <LgoodlistGirl v-show="isshowA"></LgoodlistGirl>
            <Lshopgoodlist  v-show="isshowB"></Lshopgoodlist>
        </div>
       
        <LyFooter id="myfooterr"></LyFooter>
    </div>
</template>
<script>
import LbackHeader from '../components/LbackHeader';
import LmainGirl from '../components/LmainGirl';
import Ltitle from '../components/Ltitle';
import LgoodlistGirl from '../components/LgoodlistGirl';
import Lshopgoodlist from '../components/Lshopgoodlist';
import LyFooter from '../components/LyFooter';

export default {
    name:'LmainPage',
    data(){
        return{
            isshowA:false,
            isshowB:false,
            type:this.$store.state.type
        }
    },
    components:{
       LmainGirl,Ltitle,LgoodlistGirl,LbackHeader,Lshopgoodlist,LyFooter
    },
   
    mounted(){
         if(this.type=='女装'){
             this.isshowA=true;
         }else if(this.type=='居家'){
             this.isshowB=true;
         }
        // console.log(this.$store.state.type)
    }

}
</script>
<style scoped>
/* #myfooterr{
    position: fixed;
    bottom: 0;
    left: 0;
} */
html,body{
    height: 100%;

} 
body{
    display: flex;
    flex-direction: column;
}
#center{
    flex: 1;
    overflow-y: auto;
}
</style>