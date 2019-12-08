<!--
 * @Description: 首页导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:19:50
 -->
<template>
  <div class="box">
    <ul id="fixPara">
        <li :class="isactive==index?'red':''"  @touchstart="clk(index)" @click="dianjiya(item.liname)" 
            v-for="(item,index) in lis"  :key="index">{{item.liname}}
            <!-- <router-link to="/LmainPage">
                {{item.liname}}
            </router-link> -->
        </li>
        <li class='last' @click="show()" v-show="!isShow">
            <i class="el-icon-arrow-down"></i>
        </li>
        <li class='last' @click="show()" v-show="isShow">
            <i class="el-icon-arrow-up"></i>
        </li>
    </ul>
    <div id="show" v-show='isShow'>
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
  name: 'Lnav',
  data () {
    return {
        lis:[],
        isactive:0,
        isShow:false,
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
  },
  methods:{
      clk(index){
          this.isactive=index;
      },
      show(index){
        this.isShow = !this.isShow; 
      },
      dianjiya(type){
        //   console.log(type)
          this.$store.commit("dianjiya",type);
          this.$router.push("/LmainPage")
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        width: 100%;
        /* height: .4rem; */
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: auto;
    }
    li{
        font-size: 18px;
        height: .4rem;
        line-height: .4rem;
        flex-shrink: 0;
        margin-left: 20px;
    }
    .red{
        color: #ff464e;
        border-bottom: 3px solid #ff464e ;
    }
    .last{
        width: 10%;
        height: .4rem;
        background-color: #fff;
        font-size: 20px;
        font-weight: 800;
        right: 0;
        top: 60px;
        position: sticky;
    }
    li:last-child i{
        margin-left: 8px;
    }
    #show{
        width: 100%;
        height: 280px;
        background-color:#fff;
         display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    #show div{
         width: 23%;
         overflow: hidden;
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
