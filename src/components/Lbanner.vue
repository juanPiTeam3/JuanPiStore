<!--
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-05 09:35:52
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:17:43
 -->
<template>
  <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(obj,index) in objs" :key="index"  >
                <a v-bind:href="obj.href"><img :src="obj.src" alt=""></a>
            </div>
        </div> 
           <!-- 如果需要分页器 -->
         <div class="swiper-pagination"></div>       
      </div>
    </div>    
</template>

<script>
import Swiper from "swiper";

export default {
    name:"banner",
    data(){
        return {
            objs:[
                {
                    src:"static/img/Banner03 (1).jpg",
                    href:"https://www.baidu.com"
                },
                {
                    src:"static/img/banner02.png",
                    href:"http://1000phone.com"
                },
                {
                    src:"static/img/Banner03 (2).jpg",
                    href:"http://vip.com"
                }
            ]
        }
    },
    mounted:function(){
        //此时已经有dom了。
        var mySwiper = new Swiper ('.swiper-container',{
            autoplay:true,
            speed:100,
            grabCursor:true,
                // 如果需要分页器
            pagination: {
            el: '.swiper-pagination',
            }
          
        })  
    }
}
</script>

<style scoped>
@import url(https://unpkg.com/swiper/css/swiper.css);
.swiper-container {
    width: 100%;
    height: 200px;
    margin-top: 80px;
} 
img{
    width: 100%;
    height: 100%;
    display: block;
}
.swiper-pagination{
    /* margin-bottom: -80px; */
}
</style>