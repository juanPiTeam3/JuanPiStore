<!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-05 18:12:12
 -->
<template>
  <div class="hello">
       <div id="istop">
          <div id="Search">
              <input @blur="content" type="text" v-model="search">
              <i class="el-icon-search">&nbsp;&nbsp;&nbsp;&nbsp;</i>
          </div>
         <p @click="quxiao">取消</p>   
      </div>
      <div id="bottom">
          <h5>搜索到的商品</h5>
          <ul>
              <li v-for="(item,index) in historyList" :key="index">{{item.val}}</li>
          </ul>
          <div id="center">
              <ul>
                <li v-for="(item,index) in searchList" :key="index">
                    <span @click="dianji(index)">{{item.name}}</span>
                    <!-- <router-link :to="'/SearchDetail/'+item.name">{{item.name}}</router-link> -->
                </li>
              </ul>
          </div>
      </div>
      <div id="hIstory"  v-show="isshow">
         <h5>历史搜索</h5>
				 <i @click="delHistory" class="el-icon-delete"></i>
         <p v-html="historyList"></p>
      </div>
     
  </div>
</template>

<script>
import axios from 'axios';
import { Toast,Indicator } from 'mint-ui';
export default {
  name: 'Lsearch2',
  data () {
    return {
      // 此处由于数据的问题，只能搜短袖
      search:'',
      searchList:[],
      historyList:{},
      isshow:false
    }
  },
  computed:{

  },
  created(){
    console.log(localStorage.length)
    if(localStorage.length ==0 || localStorage.length ==1 ){
        this.isshow = false;
    }else if(localStorage.length ==2){
       this.isshow = true;
    }
  },
  methods:{

    // 用axios的get方式带参传值，进行模糊查询，查短袖
    content(){
        axios.get('http://localhost:3000/search?name_like='+this.search)
        .then(res=>{
          // console.log(res.data.list)
          this.searchList=res.data.list;
        })
        .catch(err=>{
          console.log(err)
        })
    },
    dianji(index){
      // console.log(index);
      // 点击商品显示在input文本框里
        let searchs = document.getElementsByTagName("span")[index].innerHTML
        this.search=document.getElementsByTagName("span")[index].innerHTML;
        // 通过localstorage保存历史值
        localStorage.setItem('setKey',searchs)
        this.historyList = localStorage.getItem('setKey',searchs);
       
       setTimeout(()=>{
            // let str = "/Liindex";
            // this.$router.push({path:str});
        },2000)
    },
     quxiao(){
         this.search=" "
     },
    delHistory(){
        localStorage.clear();
        this.historyList = " ";
		}
}
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #istop{
    width: 100%;
    height: .14rem;
    background-color: rgb(243, 242, 242);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    color: aliceblue;
  }
  #istop i{
    font-size: .06rem;
  }
  input{
    width: .65rem;
    height: .06rem;
    outline: none;
    border: none;
    margin-left: 40px;
  }
  #Search{
    border-radius: .05rem;
    /* width: .6rem; */
    padding: 2px;
    background-color: #fff;
    height: .06rem;
    position: relative;
   }
  #Search i{
    position: absolute;
    font-size: 14px;
    left: 10px;
    top: 8px;
    color: black;
  }
  p{
      color: black;
      font-size: 16px;
  }
  #bottom{
      margin-left: 15px;
  }
  #bottom h5{
      font-size: 22px;
      color: rgb(175, 170, 170);
  }
  #center ul{
      float: left;
      margin-top: 20px;  
  }
  #center li{
      float: left;
      margin-top: 20px;
      margin-left: 10px;
      background-color: rgb(233, 233, 233);
      font-size: 18px;
      width: 100px;
      line-height: 30px;
      text-align: center;
  }
  #hIstory{
     width: 100%;
     font-size: 20px;
     margin-left: 20px;
     margin-top: 60px;
     float: left;

  }
  #hIstory h5{
     font-size: 22px;
     color: rgb(175, 170, 170);
  }
  #hIstory  p{
    margin-top: 20px;
  }
  #hIstory i{
    float: right;
    margin-top: -20px;
    display: block;
    margin-right: 40px;
  }
</style>
