<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 16:19:30
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:36:25
 -->
  <!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-26 16:15:50
 -->
<template>

    <div class="box">
       <ul>       
            <li v-for="(item,index) in goods" :key="index"  @click="changetype(item.isshopname)">
                <router-link :to="'/LshopPage/'+item.isshopname">
                    <img :src="item.img" alt="">
                    <div id="wenzi">
                        <p>{{item.count}}</p>
                        <h5>{{item.isshopname}}</h5>
                        <img :src="item.shopimg" alt="">
                    </div>
                    <div id="shop">
                        <p>{{item.stock}}款商品</p>
                        <span>{{item.day}}</span>
                    </div> 
                </router-link>
            </li>
       </ul>
    </div>
 
</template>

<script>
const  axios  =  require("axios");
export default {
  name: 'LgoodlistGirl',
  data () {
    return {
      goods:{},
      type:this.$store.state.type
    }
  },
  created(){
    //   console.log(this.$store.state.types)
      let a =this.$store.state.type
      if(a=="女装"){
             axios('http://localhost:3000/goodlilstGirl')
            .then((res)=>{
                this.goods=res.data;
            })
            .catch((err)=>{
                console.log('服务器端出错了'+err)
            })
      }
    // if(a=="居家"){
    //     axios('http://localhost:3000/goodlilstJujia')
    //     .then((res)=>{
    //         this.goods=res.data;
    //     })
    //     .catch((err)=>{
    //         console.log('服务器端出错了'+err)
    //     })
    // }
  },
  methods:{
       changetype(typename){
        //   this.currtype = typename;
        // console.log(typename)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    P{
        font-size: 26px;
    }
    ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    li{
        width: 49.5%;
        background-color: #fff;
        margin-bottom: 10px;
    }
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    #wenzi{
        width: 100%;
    }
    #wenzi p{
        color: #ff464e;
        font-size: 18px;
    }
    #wenzi h5{
        font-size: 17px;
        text-overflow: ellipsis;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        line-height: 40px;
        border-bottom: 1px dashed rgb(179, 172, 172);
    }
    #wenzi img{
        width: 50px;
        height: 30px;
        float: right;
        margin-top: -60px;
    }
    #shop{
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    #shop p{
        font-size: 18px;
        color: #bbbbbb;
        float: left;
    }
    #shop span{
        float: right;
        font-size: 17px;
        font-weight: 500;
        color: #bbbbbb;
    }
</style>
