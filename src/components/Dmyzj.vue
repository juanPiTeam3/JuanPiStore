
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:58:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="top">
    <marquee behavior="scroll" direction="left" color=red>
       <p>{{gaoshi}}</p>
    </marquee>
 <div class="header">
     
    <div class="left">
        <img src="../assets/imgs/xin.png" alt="">
        <p>商品收藏</p>
    </div>
    <div class="left">
        <img src="../assets/imgs/dianpu.png" alt="">
        <p>店铺收藏</p>
    </div>
    <div class="left right">
        <img src="../assets/imgs/banshuizuji.png" alt="">
        <p>浏览足迹</p>
    </div>

 </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
        gaoshi:
        '任何情况下，卷皮或卖家不会以任何理由主动联系用户索要密码和任何网址链接进行退款或者要求转帐、扫描二维码等支付操作！最近发现有不法分子冒充客服或卖家以商品质量问题'
    }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.header{
width:100%;
height:3rem;
background: white;
color:#989a99;
font-size: 16px;
display:flex;
margin-bottom:10px;
.left{
    width:33.3%;
    height:90%;
    border-right:1px solid #e9ebea;
    text-align: center;
    margin-top:10px;
    img{
        display:block;
        width:25px;
        height:25px;
        margin:0 auto;
    }
    }
.right{
        border-right:none;
    }
   
}
 marquee p{
        color:orange;
        font-size:16px;
    }
</style>
