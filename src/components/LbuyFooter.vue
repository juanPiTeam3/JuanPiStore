<!--
 * @Author: your name
 * @Date: 2019-12-02 10:13:45
 * @LastEditTime: 2019-12-06 11:07:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Lpurchase.vue
 -->

<template>
<div class="box">
   <div class="fot">
   <div class="left">
        <i class="iconfont icon-tishi1"></i>
        <span>应付金额：</span>
         <p v-bind:class="{active1: isShow}">{{'￥'+price+'.00'}}</p>
         <p v-bind:class="{active1: Show}">{{'￥'+$store.state.totalMoney+'.00'}}</p>
   </div>
   <div class="right" @click="gobuy">
       去付款
   </div>
    <mt-popup v-model="dialogVisible" position="middle" class="show">
      <div class="showTop">
          请填写收货地址
      </div>
      <ul class="cls">
        <li @click="cancel">取消</li>
        <li @click="goWrite">去填写</li>
      </ul>
    </mt-popup>
 </div>	
</div>


</template>
<script>

export default{
    name:'Lpurchase',
    

	data(){
 		return{
          dialogVisible:false,
          goodsInfo:{},
           totalMoney:0,
            isShow:false,
            Show:true,
            path:'LdetailPage02'
          
		}
    },
   
	methods:{
		gobuy(){
            let address=document.getElementsByClassName('addressa')[0].innerHTML;
            // console.log(address)
            if(address=='请填写收货地址'){
                 this.dialogVisible=true;
              
            }else if(address==''){
               this.dialogVisible=false;
               this.$router.push({path:'/LdetailPage'});
            }
        },
        cancel(){
            this.dialogVisible=false; 
        },
        goWrite(){
             let  toAddressPath=this.$route.query.path;
            console.log(toAddressPath);
            if(toAddressPath=='LdetailPage' || toAddressPath=='WshoppingCar'){
             this.$router.push({path:'/LaddressPage',
							query: {
									path:this.path
								}
					});
            }else{
                   this.$router.push({path:'/LaddressPage',
							
					});
            }
             
        }
        
    },
 
    created(){
        this.goodsInfo=this.$store.state.buyObj;
       //在页面加载时读取sessionStorage里的状态信息
       
      },
      mounted(){
            let path= this.$route.query.path;
             if(path=='LdetailPage' || path=='LdetailPage02'|| path=='WshoppingCar'){
                 this.isShow=true;
                 this.Show=false;
                 
                
             }else{
                  this.isShow=false;
                 this.Show=true;
               }
      },
    computed:{
    //      carPrice:function(){
    //        return this.$store.state.totalMoney;
    //     //    console.log(this.$store.state.totalMoney);

    //    },
        price(){
            // console.log(this.goodsInfo.price*this.goodsInfo.buyNum);
          return this.goodsInfo.price*this.goodsInfo.buyNum;
          
        }
    },
    //    watch:{
    //      carPrice(price){
    //         //  console.log(price);
    //          let path= this.$route.query.path;
    //          if(path=='LdetailPage'){
    //              this.isShow=true;
    //              this.Show=false;
    //              this.totalMoney=price;
                
    //          }else{
    //               this.isShow=false;
    //              this.Show=true;
    //            }
    //       }
    // }

}
</script>
<style scoped>
.active1{
    display: none;
}
.cls{
    width:100%;
    height:.52rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.cls li:nth-child(1){
   
    color:#282828;
     font-weight:border;
    font-size:.16rem;
    border-right: 1px solid #eaeaea;
}
.cls li:nth-child(2){
    color:#d64341;
    font-size:.16rem;
  
}
li{
    text-align: center;
    line-height: .52rem;
    width:50%;
    height:100%;
}
.showTop{
    color:#252525 ;
    font-size:.18rem;
    font-weight:600;
    text-align: center;
    line-height: .87rem;
    width:100%;
    height:.87rem;
    border: 1px solid #eaeaea;
}
.show{
    width:3.09rem;
    height:1.39rem;
}
.iconfont{
    font-size:.16rem;
    color:#999799;
    margin-right: 10px;
}
span{
    font-weight: 600;
    color:#444544;
    font-size:.14rem;
}
p{
    color:#ff444e;
    font-size:.13rem;
}
.right{
    height:100%;
    text-align: center;
    line-height: .5rem;
    width:37%;
    color:#fff;
    font-size:.21rem;
    background:#ff454a;
}
.left{
    display: flex;
    margin-right:.13rem;
    justify-content:flex-end;
    align-items: center;
  
height:100%;
 width:63%;
}
.fot{
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:.5rem;
  
}
.box{
    
  
   position: fixed;
    bottom: 0;
    left: 0;
	z-index: 2;
/* margin-top:.95rem; */
    width:100%;
    background: #fff;
}

</style>
