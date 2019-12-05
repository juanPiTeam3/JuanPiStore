<!--
 * @Author: your name
 * @Date: 2019-11-26 16:38:36
 * @LastEditTime: 2019-12-05 16:23:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Ldetailinfo.vue
 -->

<template>
<div class="box">
    <div class="little">
        <div class="one">
            <span class="circle"></span>
                <strong>24小时发货</strong> 
        </div>
        <div class="one">
            <span class="circle"></span>
            
                <strong>7天包退</strong> 
        </div>
        <div class="one">
            <span class="circle"></span>
            
                <strong>售后补贴</strong> 
        </div>
        <i class="iconfont icon-shenglvehao"></i>
   </div>
   <div class="select">
      <b>{{msg}}：&nbsp;&nbsp;{{color}}、{{size}}</b>
      <i class="iconfont icon-arrow-right"></i>
   </div>
   <!-- <div class="user ll">
       <p>用户口碑（0）</p>
       <label>暂无评论~</label>
   </div>
   -->
</div>

</template>
<script>
export default{
	name:'banner',
	//从后端获取轮播图的图片（动态的数据）
	data(){
		return{
            imgs:[],
            msg:"请选择",
            color:"颜色",
            size:"尺码"
		}
	}
	
}
</script>
<style scoped>
.icon-shenglvehao{
    width:1.1rem;
    display: block;
    color:#8f8f8f;
    font-size:.17rem;
    text-align: right;
    line-height: .38rem;
}
.icon-fanhui3{
    font-size: 14px;
    color:#afafaf;
    position: absolute;
    right:2px;
    bottom:6px;

}
.right p{
    text-align: center;
    line-height: .3rem;
    color:#4e4e4e;
    font-size:.13rem;
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
.user{
    width:92%;
    padding:0 4%;
    height:.85rem;
    background: #fff;
  margin-bottom: 10px;
}
.user p{
    width:100%;
    font-weight: bold;
    height:.44rem;
    text-align:left;
    line-height: .44rem;
    font-size:.14rem;
   
    
}
.user label{
    display: block;
    width:100%;
    height:.41rem;
     font-size:.14rem;
     color:#c3c3c3;
    text-align: center
}
.icon-arrow-right{
 font-size: 14px;
 font-weight: 700;
 color:#a0a0a0;
 float: right;
 line-height: .5rem;
}
.select{
    margin-bottom: 10px;
    width:92%;
    padding:0 4%;
    height:.5rem;
    background: #fff;

}
b{
    height:100%;
    text-align: center;
    line-height: .5rem;
    font-size:.14rem;
    display: block;
    float: left;
}
.little{
    background: #fff;
    width:92%;
    padding:0 4%;
    display: flex;
 
    height:.38rem;
    margin-bottom:10px;
    /* align-items: center; */
}
.one{
/* width:.73rem; */
margin-right: .15rem;
height:100%;
line-height: .38rem;
}
strong{
    font-size:12px;
    text-align:center;
}
.circle{
    display: inline-block;
    width:5px;
    height:5px;
    background:#fda1a4;
    border-radius: 50%;
}
.info{
    background: #fff;
    padding:0 4%;
    width:92%;
    height:1.28rem;
    border-bottom: 1px solid #ededed;
}

.box{
    width:100%;
   background: #f3f4f8;
}




</style>
   