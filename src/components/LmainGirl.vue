<!--
 * @Description: 导航栏里的小东西
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:28:03
 -->
<template>
  <div class="box">
    <div id="show">
        <div v-for="(item,index) in lis" :key="index">
            <img :src="item.srcs" alt="">
            <span>{{item.liname}}</span>
        </div>      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Lmain',
  data () {
    return {
        lis:[],
        type:this.$store.state.type
    }
  },
  created(){
     let a =this.$store.state.type;
      if(a=="女装"){
             axios('http://localhost:3000/lisgirl')
            .then((res)=>{
                this.lis=res.data;
            })
            .catch((err)=>{
                console.log('服务器端出错了'+err)
            })
      }
        if(a=="居家"){
        axios('http://localhost:3000/lisjujia')
        .then((res)=>{
            this.lis=res.data;
        })
        .catch((err)=>{
            console.log('服务器端出错了'+err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   
    #show{
        width: 100%;
        height: 250px;
         display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    #show div{
         width: 23%;
         /* overflow: hidden; */
    }
    #show span{
        display: block;
        font-size: 14px;
        text-align: center;
    }
    #show img{
        width: 70%;
        display: block;
        /* height: 70px; */
        margin-left: 10px;
     }
</style>
