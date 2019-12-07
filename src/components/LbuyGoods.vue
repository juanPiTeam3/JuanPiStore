<!--
 * @Author: your name
 * @Date: 2019-12-02 10:13:45
 * @LastEditTime: 2019-12-06 14:37:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Lpurchase.vue
 -->

<template>
<div class="box">
   <div class="top" v-bind:class="{ active: isActive}">
       <div class="img">
            <img :src="goodsImgAndName.goodsImg" alt="">
       </div>
    
     <div class="right">
         <div class="top1">
             <h4>{{goodsImgAndName.goodsName}}</h4>
             <span>×{{goodsInfo.buyNum}}</span>
         </div>
         
          <h6>{{goodsInfo.color}} {{goodsInfo.fontSize}}</h6>
        <div class="bottom1">
             <p>{{goodsInfo.price}}.00</p>
             <div class="say" @click="show">
                  <span>给商家留言</span>
                <i class="iconfont icon-xiaoyuhao-down"></i>
             </div>
         </div>
    </div>
   
    
     <input type="text" placeholder="选填:您对本次交易的说明（50字以内）" :style="{display:active}">
   </div>
    <div class="carImg" v-bind:class="{active: Active}">
       <div class="goodsImg">
          <img :src="img" alt="" v-for="(img,index) in $store.state.carsImg" :key="index">
         
       </div>
      <h4 @click="godetail">共{{$store.state.carGoodsNum}}件 <i class="iconfont icon-qianjin"></i> </h4>  
    </div>
   <div class="middle">
       <div class="cls">
          <h5>商品总额</h5>
          <label v-bind:class="{show: isShow}">{{'￥'+price+'.00'}}</label>
          <label v-bind:class="{show: Show}">{{'￥'+$store.state.totalMoney+'.00'}}</label>
       </div>
       <div class="cls">
           <h3>使用优惠券</h3>
           <div class="youhui">
                 <label class="quan">暂无可用券</label>
                  <i class="iconfont icon-arrow-right"></i>
             </div> 
      </div>
   </div>
    <div class="clss">
        <div class="clstop">
            <h3>可用0个卷币抵0.00</h3>
             <i class="iconfont icon-tishi1"></i>
        </div>
          <el-switch  v-model="value" active-color="#afacac" inactive-color="#fe474c">
          </el-switch>
      </div>
 </div>	

</template>
<script>

export default{
	name:'Lpurchase',

	data(){
		return{
            activeName: '1',
            active:'none',
            count:0,
            goodsInfo:{},
            isActive:false,
            Active:true,
            isShow:false,
            Show:true,
            carsGoodsImg1:[],
            totalMoney:0,
            goodsSum:0,
            goodsImgAndName:{},
             value:true,
             buyProducts:{}

		}
    },
   
	methods:{
		show(){
            this.count++;
            if(this.count>1){
                 this.active='none';
                 this.count=0;
            }else{
             this.active='block';
            }
           
        },
        godetail(){
            this.$router.push({path:'LcarGoodsPage'});
        }
    }, 
    mounted(){
      this.goodsInfo=this.$store.state.buyObj;
      this.goodsImgAndName=this.$store.state.goodsImgAndName;
       let path= this.$route.query.path;
             if(path=='LdetailPage02' || path=='LdetailPage'){
                 this.isActive=true;
                 this.Active=false;
                  this.isShow=true;
                 this.Show=false;
                 
                //   console.log(val)
             }else{
                 this.isActive=false;
                 this.Active=true;
                  this.isShow=false;
                 this.Show=true;
                //   this.goodsInfo=this.$store.state.buyObj;

             }
     
    },
   computed:{
      
        // loginState:function(){
        //     let obj={
        //         imgs: this.$store.state.carsImg,
        //         prices:this.$store.state.totalMoney,
        //         goodsSum:this.$store.state.carGoodsNum
        //     }
        //     return obj;
        //     console.log(obj);
        // },
    //    carPrice:function(){
    //        return this.$store.state.totalMoney;
    //     //    console.log(this.$store.state.totalMoney);

    //    },
       price(){
        //    console.log(this.goodsInfo.price*this.goodsInfo.buyNum);
            return this.goodsInfo.price*this.goodsInfo.buyNum;
          
        }
    },
     watch: {
        //  carPrice(price){
        //    console.log(price);
        //    this.totalMoney=price;
        //  },
        loginState(val) {
            
            //  let path= this.$route.query.path;
            //  if(path=='LdetailPage'){
            //      this.isActive=true;
            //      this.Active=false;
            //       this.isShow=true;
            //      this.Show=false;
            //      this.carsGoodsImg1=val.imgs;
            //      this.totalMoney=val.prices;
            //      this.goodsSum=val.goodsSum;
            //     //   console.log(val)
            //  }else{
            //      this.isActive=false;
            //      this.Active=true;
            //       this.isShow=false;
            //      this.Show=true;
            //     //   this.goodsInfo=this.$store.state.buyObj;

            //  }
           
        }
        }
}

 </script>

<style scoped>
.show{
    display: none;
}
.goodsImg{
    display: flex;
 

    overflow-x: auto;
    margin-left:4%;
    width:84%;
    height:.8rem;
}
.goodsImg img{
    height:100%;
    width:.8rem;
    margin-right: .1rem;
}
.icon-tishi1{
    color:#a5a2a5;
    font-size:14px;
    line-height: .21rem;
    margin-left:5px;
}
.carImg{
    display: flex;
    width:100%;
    height:1.08rem;
    align-items: center;
   
}
.carImg h4{
    width:18px;
    height:.8rem;
   text-align: center;
    align-items: center;
    flex-wrap: wrap;
    display: flex;
    font-size:14px;
    color:#c3c3c3;
 
}
.active{
    display: none !important;
}
.mint-switch {
    margin-right: 0;
}
.clss{
    display: flex;
     padding-left:3.6%;
    padding-right: 2.8%;
    width:93.6%; 
    height:.5rem;
    justify-content: space-between;
    align-items: center;
  
}
.clstop{
    display: flex;
}
.mint-switch-core{
    width:.41rem !important;
    height:.14rem !important;
    background: #9c9a9c;
}
.icon-arrow-right{
 color:#989698;
 font-size:.15rem;

}
.youhui{
    display: flex;
    /* width:.8rem; */
    align-items: center;
    justify-content:space-between;
}
.middle{
    width:100%;
    height:.86rem;
     border-bottom: 1px solid #f2eff2;
}
.quan{
    color:#a3a4a3;
    margin-right: 0;
}
label{
    color:#505050;
    font-size:12px;
    margin-right: .23rem;
}
.cls{
    display: flex;
    justify-content: space-between;
    align-items: center;
   padding-left:3.6%;
    padding-right: 2.8%;
    width:93.6%;
    height:.43rem;
    margin:0 auto;
}
.say{
   
    text-align:left;
    width:36%;
  display: flex;
  justify-content: space-around;
  align-items: center;
   /* height: .48rem; */
 
}
.say span{
    color:#b6b6b6;
    font-size:12px;
}
input{
    border:none;
   outline: none;
    width:3.4rem;
   position: absolute;
   bottom:-30px;
   left: 0;
    height:.4rem;
    text-align: center;
    line-height: .4rem;
   z-index: 2;
    background:#f8f8f8 ;
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
    
   width: 74%;
   height:100%;
}
.img{
    display: flex;
    align-items: center;
    width:1rem;
    height:1.06rem;
   justify-content: center;
   
}
img{
    width:.77rem;
    height:.77rem;    
}
.box{
    width:98.2%;
    padding-left: 1.8%;
    margin-top:.13rem;
    background: #fff;
    overflow: hidden;
      margin-bottom:.1rem;
    
}
.top{
    display: flex;
   position: relative;
    /* overflow: hidden; */
    border-bottom: 1px solid #f2eff2;
    justify-content: space-between;
    align-items: center;
   padding-bottom: .18rem;
    width:95.2%;
    /* height:1.06rem; */
}
</style>
