<!--
 * @Description: 商品详情页的列表
 * @Author: 是丽丽呀
 * @Date: 2019-11-09 09:17:12
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-02 14:12:17
 -->
<template>
    <div id="box">
        <Lback id="guding"></Lback>
        <div id="center">
            <Lshopname :Isshopname="this.$route.params.isshopname"></Lshopname>
            <LshopNav></LshopNav>
            <Lshopgoodlist :Isshopname="this.$route.params.isshopname"></Lshopgoodlist>
        </div>
    </div>
   
</template>
<script>
import Lback from '../components/Lback';
import Lshopname from '../components/Lshopname';
import LshopNav from '../components/LshopNav';
import Lshopgoodlist from '../components/Lshopgoodlist';

// console.log(this.$route.parmas.id)
export default {
    name:'LshopPage',
    data(){
        return{
            
        }
    },
    components:{
      Lback,Lshopname,LshopNav,Lshopgoodlist
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
        margin-top: 20px;
    }
</style>