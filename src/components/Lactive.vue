<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 16:19:30
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-03 10:50:07
 -->
 
<template>
<div>
    <div class="box">
        <div id="left">
            <!-- <h6>限时秒杀</h6>
            <p>360热循环加厚暖冬被</p>
            <div id="daojis"></div> 
            <img src="../../static/img/active1.gif" alt=""> -->
            <img src="../../static/img/5de0da9333b0890ec233c7d3_540x656.gif" alt="">
        </div>
        <div id="top">
            <div id="right">
                <!-- <h6>品牌清仓</h6>
                <p>红蜻蜓童装上新</p>
                <div> 全场低至28元 </div>
                <img src="../../static/img/active3.gif" alt=""> -->
            <img src="../../static/img/5de0dae133b08909ed3b1255_540x328.png" alt="">

            </div>
        </div>
        <div id="bottom">
                <!-- <div id="right">
                <h6>超惠一口价</h6>
                <p>勇士时尚女装热卖</p>
                <div> 29元1件任选起 </div>
                <img src="../../static/img/active2.gif" alt="">
            </div> -->
            <img src="../../static/img/5ddf9650b6f8ea7c7c7b92b0_540x328.png" alt="">
        </div>
      
  </div>
    <div id="imgs">
            <img src="../assets/img/bb1.gif" alt="">
    </div>
</div>
 
</template>

<script>
export default {
  name: 'Lactive',
  data () {
    return {
      
    }
  },
  methods:{
      
    }   
} 

    // var timego=new Date("2020-11-29 12:00:00"); //设置到期时间
    // setInterval(function(){
    //     var timenow=new Date();//获取当前时间
    //     var time=timego.getTime()-timenow.getTime();//时间差的所有毫秒数
    //     var day=parseInt((time/1000/60/60/24)%30)
    //     var hou=parseInt((time/1000/60/60)%24);
    //     var min=parseInt((time/1000/60)%60);
    //     var sec=parseInt((time/1000)%60);
    //     document.getElementById('daojis').innerHTML=day+"天"+hou+"时"+(min<10?"0"+min:min)+"分"+(sec<10?"0"+sec:sec)+"秒";
    // },1)
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#bottom img{
    width: 100%;
    display: block;
}
  #left  #daojis{
        width: 100px;
        font-size: 12px;
        background-color: black;
        color: #fff;
        margin-top: 16px;
        margin-left: 10px;
    }
    #box{
        width: 100%;
    }
    #left{
        width: 50%;
        float: left;
    }
    #left img{
       width: 100%;
       display: block;
    }

    #top{
        width: 50%;
        float: right;
    }
 
    #top #right img{
        width: 100%;
        display: block;
        float: right;
    }

    #bottom{
        width: 50%;
        float: right;
    }
    
    #bottom #right img{
        display: block;
        float: right;
    }
    #imgs{
        width: 100%;
        margin-top: 10px;
        background-color: #fff;
        padding-bottom: 20px;
    }
    #imgs img{
        width: 100%;
        height: 100%;
        display: block;
    }
   
</style>
