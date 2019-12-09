<!--
 * @Author: your name
 * @Date: 2019-11-26 16:42:18
 * @LastEditTime: 2019-12-06 14:53:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\pages\LdetailPage.vue
 -->
<template>
	<div class="box">
	    <div class="top">
            <back></back>
           <div class="bao">
               <h3>商品清单(共{{10}}件)</h3>
            </div>
        </div>
        <div class="bigBot">
            <div class="bottom"  v-for="(goods,index) in goodsInfo" :key="index">
                <div class="img">
                    <img :src="goods.img" alt="">
                </div>
                <div class="right">
                    <div class="top1">
                        <h4>{{goods.name}}</h4>
                        <span>×{{goods.count}}</span>
                    </div>
                    <h6>{{goods.deocra}} {{goods.size}}</h6>
                    <div class="bottom1">
                        <p>￥{{goods.price}}.00</p>
                        <!-- <div class="say" @click="show">
                            <span>给商家留言</span>
                            <i class="iconfont icon-xiaoyuhao-down"></i>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        
    
	  <!-- <input type="text" placeholder="选填:您对本次交易的说明（50字以内）" :style="{display:active}"> -->	
	</div>
</template>
<script>

import back from '../components/back';
     export default{
		name:' Login',
	
		data(){
			return{
				goodsInfo:[]
			    
			}
        },
        components:{
            back
        },
        mounted(){
            this.goodsInfo=this.$store.state.goodsData;
            console.log(this.goodsInfo);
        }
		
			

			
	}
</script>
<style scoped>
.bigBot{
    margin-top:.5rem;
    width:100%;
    
}
.bottom1{

  width:100%;
  height:.48rem;
display: flex;
/* padding-top:.14rem; */
justify-content: space-between;
align-items: center;   
}
p{
    width:14%;
    height:.48rem;
    line-height: .48rem;
    color:#555555;
    font-size:12px;
}
h6{
    font-weight: normal;
    font-size:12px ;
    color:#cdcccd;
    padding-top:.1rem;
}
h4{
    font-size: .15rem;
  
}
span{
    color:#a2a0a2;
    font-size:12px;
    display: block;
}
.top1{
    width:100%;
    display: flex;
    padding-top:.14rem;
    justify-content: space-between;
    align-items: center;
}
.right{
    margin-left: 10px;
   width: 74%;
   height:100%;
   padding-right: 12px;
}
.img{
    display: flex;
    align-items: center;
    width:1rem;
    height:1.06rem;
   justify-content: center;
   
}
.img img{
     width:.77rem;
    height:.77rem;    
}
.bottom{
    display: flex;
   position: relative;
background: #fff;
    border-bottom: 1px solid #f2eff2;
    justify-content: space-between;
    align-items: center;
   padding-bottom: .18rem;
    /* width:95.2%; */
    /* height:1.06rem; */
}
.box{
	width:100%;
background: #f3f4f8;
}
.top{
    position: fixed;
    left:0;
    top:0;
    z-index: 5;
    border:1px solid #dedede;
    width:100%;
    height:.5rem;
    background: #fff;
}
h3{
  width:100%;
    height: 100%;
    line-height: .5rem;
  text-align: center;
}
</style>