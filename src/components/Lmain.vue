<!--
 * @Description: 首页导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-29 20:43:26
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
        lis:[]        
    }
  },
  created(){
      axios('http://localhost:3000/lis')
      .then(res=>{
          this.lis=res.data
      })
      .catch(err=>{
          console.log("服务器端出错了"+err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    #show{
        width: 100%;
        height: .6rem;
        background-color:#fff;
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
