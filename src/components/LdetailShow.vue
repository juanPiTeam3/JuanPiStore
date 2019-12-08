<!--
 * @Author: your name
 * @Date: 2019-11-26 16:38:36
 * @LastEditTime: 2019-12-05 16:11:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Ldetailinfo.vue
 -->

<template>
<div class="box ll">
  
   <div class="nav" >
      <mt-button  size="small" @click.native.prevent="active = 'tab-container1'">图文详情</mt-button>
      <mt-button  size="small" @click.native.prevent="active = 'tab-container2'">商品参数</mt-button>
      <mt-button   size="small" @click.native.prevent="active = 'tab-container3'">咨询与售后</mt-button>
    </div>
    
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<!-- cell组件 -->
           <div class="img">
               <img :src="Img" alt="" v-for="(Img,index) in  goodsImg" :key="index" >
              
           </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
          <div class="canshu">
                <div class="a" v-for="(num,index) in  goodsCanshu" :key="index">
                    <label >{{num.label}}</label>
                    <b>{{num.source}}</b>
                </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container3">
        	<!-- cell组件 -->
         <div class="aftershow">
            <div class="all">
               <div class="little" v-for="(consult,index) in  goodsConsult" :key="index">
                  <h6>{{consult.txt}}</h6>
                  <p>{{consult.content}}</p>
               </div>
               
            </div>   
         </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

</div>
 

</template>
<script>

import axios from "axios";
export default{

   name: 'page-tab-container',
  data() {
    return {
      id:'',
      goodsImg:{},
      goodsCanshu:[],
      goodsConsult:[],
      goodsPrice:[],
    
      active: 'tab-container1'
    };
  },
  
    created(){
       this.id=this.$store.state.goodsId;
				axios.get('goodsDetails/'+this.id)
				.then(res=>{
        
        this.goodsImg=res.data.goodsImg;
        this.goodsCanshu=res.data.goodsCanshu;
        this.goodsConsult=res.data.goodsConsult;
        this.goodsPrice=this.goodsConsult[4].txt;
				})
				.catch(err=>{
					console.log(err);
				})
			}
 
};
</script>
 
<style  scoped>
.box{
width:100%;
margin-top:10px;
}

em{
    font-style: normal;
    margin-left:.6rem;
    display: block;
    color:#c5c5c5;
    font-size:12px;
  
    margin-top:10px;
}

.right{
    position: relative;
    margin-top:.3rem;
    width:.85rem;
    height:.3rem;
    border-radius: 5px;
    float: right;
    vertical-align: middle;
    border:1px solid #767676;
}
.canshu{
    background: #fff;
    width:90%;
    padding:0 5%;
  margin:0 auto;
  margin-bottom: 10px;
}
.img{
    width:100%;
   
}
.all{
    background: #fff;
   padding: .14rem .24rem;
}
.yellow{
    color:#ff8e25;
}
.little{
    width:100%;
}
.aftershow{
    width:100%;

}
.a{
    width:100%;
    margin-bottom: 5px;
}
h6{
   color: #4a4a4a;
    font-size:12px;
    text-align: left;
    margin-bottom: 4px;
}
p{
    color: #9b9b9b;
    font-size:12px;
    text-align: left;
    margin-bottom: 8px;
}
b{
    font-weight: normal;
    color:#303030;
 display: inline-block;  
 font-size:14px; 
 overflow: hidden;
}
label{
    display: inline-block;
    color: #bbb;
    font-size:14px;
    width:.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    margin-right: .6rem;
}
.img img{
    width:100%;
}
  .item {
    display: inline-block;
  }
 
  .nav {
      display: flex;

      width:100%;
    padding: 10px;
  }
 .mint-button--small{
     color:#7a7a7a;
     font-size:14px; 
     width:1.18rem;
     background: #fff;
     border-radius: none;
     border:1px solid #717171;
    box-shadow:none;
 }
 .mint-button--small:active{
   background: #666666;
   color: #fff;
 }
  .link {
    color: inherit;
    padding: 20px;
    display: block;
  }
</style>

