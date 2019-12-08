<!--
 * @Author: your name
 * @Date: 2019-11-26 11:16:26
 * @LastEditTime: 2019-12-08 16:01:15
 * @LastEditors: 是丽丽呀
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Ldetails.vue
 -->
<template>
<div class="box ll">
    <div class="swiper-container">
       
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <img :src="img" alt="" @click="goPicture" >
	        </div>
	    </div>
        
	  <div class="swiper-pagination"></div>
	</div>
  
      <div class="info">
       <div class="left">
            <div class="intop">
                <span class="span">￥{{goods.price}}</span>
                <i>￥{{goods.deletePrice}}</i>
                <em>{{goods.zhekou}}折</em> 
                <b>包邮</b> 
                <em>{{goods.buyman}}人已购</em> 
           </div>
            <p>{{goods.goodsDec}}</p>
        </div>
         <div class="right">
                <div class="tu">
                    <i class="iconfont icon-fenxiang"></i>
                    <label>立即分享</label>
                </div>
                </div>
            </div>
            <Ldetailinfo>
            </Ldetailinfo>
  </div>



	
</template>
<script>
import Ldetailinfo from './Ldetailinfo';
import swiper from 'swiper';
import axios from 'axios';
export default{
	name:'banner',
	//从后端获取轮播图的图片（动态的数据）
	data(){
		return{
            id:'',
            imgs:[],
            goods:{}
		}
    },
    components:{
        Ldetailinfo
    },
	created(){
        this.id=this.$store.state.goodsId;
        //  this.id= this.$route.query.id;
        // console.log(this.id);
		axios.get('bannerimgs/'+this.id)
		.then(res=>{
         
            this.imgs=res.data.img;
           this.goods=res.data;
            this.$store.commit('goodsImgAndName', {
					 goodsName:this.goods.goodsName,
					 goodsImg:this.imgs[0],
					 
				}),
			this.$nextTick(function(){
				let mySwiper = new swiper('.swiper-container',{

					pagination: {
					  el: ".swiper-pagination",
					  type: "custom",
					  renderCustom: function(swiper, current, total) {
						var customPaginationHtml = "";
						for (var i = 0; i < total; i++) {
                           
						  //判断哪个分页器此刻应该被激活
						  if (i == current - 1) {
							customPaginationHtml +=
							  '<span class="swiper-pagination-customs swiper-pagination-customs-active">'+(i+1)+'/'+total+'</span>';
                         }
                         //else {
						// 	customPaginationHtml +=
						// 	  '<span class="swiper-pagination-customs"></span>';
						//   }
						}
						return '<span class="swiperPag">'+customPaginationHtml+'</span>';
					  }
					},
                     autoplay:false,
				      speed:100,
				      grabCursor:true
				});
			});
		})
		.catch(err=>{
			console.log(err);
		})
    },
    methods:{
        goPicture(){
            // let id=this.id;
            // console.log(id);
            //  this.$router.push({ name: "LpicturePage", params:{id} });
              this.$router.push({path:'/LpicturePage', query:{id:this.id}});
        }
    }
}
</script>
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
/* .bottom{
    width:92%;
    
} */
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
.left{
    float: left;
    width:80%;
}
.right{
    float: right;
    width:20%; 
}
.intop{
    height:.44rem;
    width:100%;
    
    text-align: center;
}

.tu{
    margin-top:.44rem;
    width:100%;
    height:100%;
    text-align: center;
}
.tu .icon-fenxiang{
font-size:30px;
color:#fe474c;
display: block;
margin-top: -20px;
}
label{
    text-align: center;
    display: block;
    color:#e65155;
    width:100%;
    font-size:12px;
}
.span,em,i,b{
    margin-top: .1rem;
    display: inline-block;
    font-weight: normal;
    font-style: normal;
    margin-right:4px;
}
.span{
    color:#fd373a;
    font-size:.18rem;
}
i{
    color:#858585;
    font-size:.12rem;
    text-decoration: line-through;
}
em{
    color:#858585;
    font-size:.12rem;
}
b{
    width:.28rem;
    height:.16rem;
    background:#ff444a; 
   color:#fff;
    font-size:.11rem;    
}
p{
    /* font-family: "宋体"; */
    /* text-align: center; */
    font-size:.15rem;
    color:#4d4d4d;
    font-weight:bold;
    padding-left:.16rem ;
}
.box{
    width:100%;
   background: #f3f4f8;
}
.iconfont{
    display: inline;
    font-size:.2rem;
    color:#fff;
    text-align: center
}
.swiper-container{
  position: relative;
  width:100%;
  height:3.75rem;
  /* border-radius: 9px; */
}

.swiperPag {
  width:1rem;
  height: .2rem;
  border-radius: 0.04rem;
  display:block;
position: absolute;
right:.15rem;
bottom:.1rem;
text-align: right;

}
.swiper-pagination-fraction,.swiper-pagination-bullets {
  bottom:0.27rem;
}
.swiper-pagination-customs {
 width: .06rem;
 height:.06rem;
  border-radius: 50%;
  display: inline-block;
   background-color: red;
  margin-right: .05rem;
}
/*自定义分页器激活时的样式表现*/
.swiper-pagination-customs-active {

  width: .3rem;
  height: .15rem;
  display: inline-block;
  border-radius: 4px;
  background: black;
  color:#fff;
  font-size: 14px;
  background: rgba(0,0,0,.4);
  text-align:center;
  line-height: .15rem;

}
img{
  width:100%;
  height:100%;
}

</style>
   