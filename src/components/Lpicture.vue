<!--
 * @Author: your name
 * @Date: 2019-12-01 15:28:02
 * @LastEditTime: 2019-12-01 18:58:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Lpicture.vue
 -->
<template>
<div class="box">
<div id="gallery" class="swiper-container" style="margin-bottom: 10px;">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="(img,index) in imgs.img" :key="index">
        <img :src="img" @click="gocar"/>
    </div>
      
    </div>
    
  </div>
  <div id="thumbs" class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" id="second" v-for="(img,index) in imgs.img" :key="index">
        <img  :src="img"/>
      </div>
     
    </div>
  </div>
</div>
</template>
<script>
import axios from "axios";
import Swiper from 'swiper';
export default{
   data() {
      return {
          imgs:[],
      }
      },
      created(){
        
            axios.get('bannerimgs/001')
            .then(res=>{
                // console.log(res.data);
                this.imgs=res.data;
                this.$nextTick(function(){
                   var thumbsSwiper = new Swiper('#thumbs',{
                        spaceBetween: 10,
                        slidesPerView: 4,
                        watchSlidesVisibility: true,//防止不可点击
                      })
                      var gallerySwiper = new Swiper('#gallery',{
                        spaceBetween: 10,
                        thumbs: {
                          swiper: thumbsSwiper,
                        }
                      })
                  });
            })
            .catch(err=>{
                console.log(err);
            })
       },
       methods:{
         gocar(){
            this.$router.push({path:'/LdetailPage'});
         }
       }
       


}
</script>
<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.box{
  width:100%;
  height:100%;
  background: #222325;
}
#thumbs{
  width:2.69rem;
  margin:0 auto;
  height:.35rem;
  padding-top: .9rem;
  padding-bottom: .43rem;
}
#gallery{
  padding-top:.9rem;
  width:100%;
  height:3.8rem;
}
    .swiper-wrapper{
      height: auto;
    }
    .swiper-slide img{
      width: 100%;
      height:100%;
      display: block;
    }
    .swiper-container-thumbs .swiper-slide-thumb-active img{
      opacity: 1;
    }
    .swiper-slide-thumb-active img{
      border:2px solid #eb454d;
      
    }
    .swiper-container-thumbs img{
      opacity: .5;
      width:.34rem;
      height:.34rem;
    }
  #second{
    flex-wrap:wrap;
  width:.4rem !important;
  height:.36rem;
  margin-right: 10px;
}

 
</style>

