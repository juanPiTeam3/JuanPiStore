<!--
 * @Author: your name
 * @Date: 2019-12-02 10:13:45
 * @LastEditTime: 2019-12-05 16:54:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Lpurchase.vue
 -->

<template>
<div class="box">
    <div class="top">
        <span> 余额可支付0.00元</span>
        <i class="pay-type-radio"></i>
    </div>
    <div class="bottom">
        <div class="pay fir">
          
            <h3 class="h3">支付方式</h3>
        </div>
        <div class="pay" v-for="(data,index) in datas" :key="index" 
			 :class="[currIndex==index?Isactive:'']" >
            <div class="co">
                <i class="iconfont" :class="data.icon"></i>
                <h3 >{{data.pay}}</h3>
            </div>
             <i class="pay-type-radio" @click="change(index)"></i>
        </div>
       
    </div>
 </div>	

</template>
<script>

export default{
	name:'Lpurchase',

	data(){
		return{
            datas:[
             {
                 "pay":"微信支付",
                 "icon":"icon-weixin"

            },
            {
                "pay":"支付宝",
                "icon":"icon-umidd17" 
            },
            {
                "pay":"云闪付",
                "icon":"icon-yunshanfu1" 
            },
             {
                "pay":"微信好友代付",
                "icon":"icon-daifukuan1" 
            }
            ],
           Isactive:'active',
           haha:0,
           currIndex:-1,
		}
    },
    
	methods:{
		change(index){
           
            this.currIndex=index;
            
              this.Isactive='active';
          
        }
	}

}
</script>
<style scoped>
.icon-weixin{
    color:#08cf31;
}
.icon-umidd17{
    color:#00baef;
}
.icon-yunshanfu1{
    color:#e72421;
}
.icon-daifukuan1{
    color:#08cf31;
}
.iconfont{
    font-size:.27rem;
}
.co{
    display: flex;
    justify-content: center;
    align-items: center;
}
.active .pay-type-radio {
    background: url(../assets/img/radio.png) no-repeat;
    background-size: cover;
    border: none;
}
.error .pay-type-radio{
 background:none;
  
}
.pay{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:.5rem;
}
h3{
    margin-left:.13rem;
    color:#393839;
}
.h3{
    margin-left: 0;
}
.fir{

   border-bottom: 1px solid #f2eff2;
}
.box{
    width:100%;
    background: #fff;
   margin-bottom: .95rem;
   min-height: 3rem;
  
  
}
.top{
    display: flex;
    justify-content: space-between;
    align-items: center;
     margin-left:3.6%;
    margin-right: 2.8%;
    width:93.6%; 
  height:.48rem;
   border-bottom: 1px solid #f2eff2;
}
.pay-type-radio {
  
    width: 18px;
    height: 18px;
    border: 1px solid #999;
    border-radius:100%;
   
}
.bottom{
    width:92.8%;
    padding:0  3.6%;
    /* overflow: hidden; */
   
   
}
span{
    display: block;
    color:#bababa;
    font-size:.14rem;
}
</style>
