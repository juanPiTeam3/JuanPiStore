<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-28 19:41:06
 -->
<template>
    <div id="box">
       <div id="top">
           <img src="../../static/img/shopimg.png" alt="">
           <div id="right">
               <span>{{this.Isshopname}}</span>
               <p>共200+件商品</p>
           </div>
           <i  class="el-icon-star-on" v-bind:class='{"isRed":isA,"isBlack":!isA}' @click="toggle"></i>


       </div>
       <div id="bottom">
           <div>满件折</div>
           <span>全场5折购买</span>
            <img src="../../static/img/youhui.gif" alt="">
       </div>
    </div>  
</template>

<script>
import axios from "axios"
export default {
  name: 'Lshopname',
  props:["Isshopname"],
  data () {
    return {
        isA:false
    }
  },
  methods:{
       toggle:function(){
                this.isA = !this.isA;
            }
  },
  mounted(){
  }
  }
</script>
<style scoped>
#box{
    width: 100%;
    height: .5rem;
    font-size: 16px;
    margin-bottom: 10px;
}
#top{
    width: 100%;
    height: .2rem;
    background-color: #fff;
}
#top img{
    display: block;
    width: 50px;
    height: 50px;
    margin: 15px;
    float: left;
}
#right{
    float: left;
}
#right span{
    float: left;
    margin-top: 20px;
}
#right p{
    font-size: 14px;
    color:rgb(168, 163, 163);
}
#top i{
    float: right;
    margin-top:20px;
    margin-right: 20px;
    font-size: 30px;
}
.isRed{
    color: #ff464e;
}
.isBlack{
    color: grey;
}
#bottom{
    width: 100%;
    height: .3rem;
    background:url('../../static/img/brand_bg.15e6f457.png')

}
#bottom div{
    width: 50px;
    height: 20px;
    background-color: #ff464e;
    color: #fff;
    font-size: 14px;
    margin-left: 15px;
    float: left;
    text-align: center;
}
#bottom span{
    float: left;
    font-size: 14px;
    margin-left: 15px;
}
#bottom img{
    width: 90%;
    height: 90px;
    margin-top: 10px;
    margin-left:4%;
}

</style>
