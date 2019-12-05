<!--
 * @Author: your name
 * @Date: 2019-11-26 16:38:36
 * @LastEditTime: 2019-12-05 16:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Ldetailinfo.vue
 -->

<template>

   <div class="dian">
       <div class="left">
           <img src="../assets/img/logo.png" alt="">
           <strong class="strong">NALIZI纳利姿旗舰店</strong>
           <em>共200+件商品</em>
       </div>
       <div class="right">
           <p>进入店铺</p> 
           <i class="iconfont icon-arrow-right"></i>
       </div>
   </div>
 
    



 

</template>
<script>


export default{

   name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  }
};
</script>
 
<style  scoped>
.icon-arrow-right{
  color:#919191;
  font-size:14px;
  font-weight: 600;
  position: absolute;
  right: 0;
  top:8px;
}

.dian{
   width:92%;
    padding:0 4%;
    height:.78rem;

     background: #fff;
}
.left{
    padding-top: .15rem;
    float: left;
    width:60%;
    height:100%;
    align-items: center;
}
.left img{

    width:.47rem;
    height:.47rem;
    float: left;
    border:1px solid #f2f2f2;
    
}
.strong{
  text-align: center;
font-weight: bold;
display: block;
font-size:.16rem ;
margin-left:.5rem;
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
 .right p{
   width:80%;
   text-align: center;
   line-height: .3rem;
 }
 
</style>

