<!--
 * @Description: 商品详情页的列表
 * @Author: 是丽丽呀
 * @Date: 2019-11-09 09:17:12
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:57:18
 -->
<template>
    <div id="box">
        <Lback id="guding"></Lback>
        <div id="center">
            <Lshopname :Isshopname="this.$route.params.isshopname"></Lshopname>
            <LshopNav></LshopNav>
            <Lshopgoodlist :Isshopname="this.$route.params.isshopname"></Lshopgoodlist>
        </div>
        <LyFooter id="myfooterr"></LyFooter>
    </div>
   
</template>
<script>
import Lback from '../components/Lback';
import Lshopname from '../components/Lshopname';
import LshopNav from '../components/LshopNav';
import Lshopgoodlist from '../components/Lshopgoodlist';
import LyFooter from '../components/LyFooter';


// console.log(this.$route.parmas.id)
export default {
    name:'LshopPage',
    data(){
        return{
            
        }
    },
    components:{
      Lback,Lshopname,LshopNav,Lshopgoodlist,LyFooter
    },
    mounted(){
        // console.log(this.$route.params.isshopname)
    }

}
</script>
<style scoped>
    #guding{
        position: fixed;
        top: 0;
        left: 0;
    }
    #center{
        margin-top: 30px;
        margin-bottom: 50px;
    }
    #myfooterr{
        position: fixed;
        bottom: 0;
        left: 0;
    }
</style>