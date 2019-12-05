<!--
 * @Author: your name
 * @Date: 2019-12-02 10:13:45
 * @LastEditTime: 2019-12-05 18:08:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Lpurchase.vue
 -->

<template>
<div class="box">
   <div class="address" @click="toAddress">
       <div class="left">
           <i class="iconfont icon-diyu"></i>
           <div class="info">
               <p class="add" :style="{display:Show}">{{userInfo.user}}&nbsp;&nbsp;&nbsp;{{phone}}</p>
               <p class="addr" :style="{display:Isshow}">{{userInfo.address}}{{userInfo.detailAddress}}</p>
               <p class="addressa" :style="{display:show}">{{address}}</p>
           </div>
           
       </div>
       
       <i class="iconfont icon-arrow-right"></i>
   </div>
 </div>	

</template>
<script>
export default{
	name:'LbuyAddress',
   
	data(){
		return{
         address:'请填写收货地址',
         Isshow:"none",
         Show:"none",
         show:"block",
         userInfo:{},
         phone:''
		}
    },
   
	methods:{
		toAddress(){
           this.$router.push({path:'/LaddressPage'});
        }
    },
     created(){
      let path= this.$route.query.path;
      if(path=='LaddressPage'){
          this.show="none";
          this.Isshow="block";
          this.Show="block";
         this.address='';
         this.userInfo=this.$store.state.userInfo;
          let tel=this.userInfo.phone;
            tel = "" + tel;
          this.phone = tel.substr(0,3) + "****" + tel.substr(7)
      }
       
                    // var tel = 18810399133;
                    // tel = "" + tel;
                    // var ary = tel.split("");
                    // ary.splice(3,4,"****");
                    // var tel1=ary.join("");
                    // var tel = 18810399133;
                    // tel = "" + tel;
                    // var tel1 =tel.replace(tel.substring(3,7), "****")
                    // var tel = 18810399133;
                    // tel = "" + tel;
                    // var reg=/(\d{3})\d{4}(\d{4})/;
                    // var tel1 = tel.replace(reg, "$1****$2")
                    // console.log(tel1);
    }
    
 
}
</script>
<style scoped>
.info p{
    width:100%;

}
.box{
    margin-top:.5rem;
    width:100%;
    background: #4a515a;
}
.address{
   
    display: flex;
    justify-content:space-between;
    align-items: center;
   width:100%;
   height:.59rem;
}
.left{
    width:100%;
    margin-right:.4rem;
    height:100%;
    display: flex;
    align-items: center;
}
.iconfont{
    display: block;
    color:#fff;
   
}
p{
    font-size:.14rem;
    color:#fff ;
   
    margin-left: .18rem;

}
.icon-diyu{
     padding-left: 6px;
    font-size: .23rem;
}
.icon-arrow-right{
    padding-right: 10px;
  font-size: .14rem;  
}
</style>
