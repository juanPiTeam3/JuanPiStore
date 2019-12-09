<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 15:45:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
    <div  class="zhuti">
      <img class="juanpi" src="../assets/imgs/juanpi.png" alt="">
      <div class="top">
          <span @click="goLogin">
            <img class="weixin" src="../assets/imgs/weixin.png" alt="">
            <!-- <router-link to="./Dlogin"> -->
                <p>用户名登陆</p>
            <!-- </router-link> -->
        </span>
        </div>
        <p class="denglv">推荐使用微信一键登录</p>
        <div class="top zhuce">
          <span>
            <img class="weixin " src="../assets/imgs/shouji.png" alt="">
            <router-link to="./Dphonenumber">
                    <p>手机注册</p>
            </router-link>
        </span>
        </div>
    </div>
        <p class="denglv">已阅读并同意服务协议及隐私政策</p>
 
</div>
</template>

<script>
export default {
  data () {
    return {
      regiset:''
    }
  },
   watch:{
          '$route':"goLogin"
      },
  methods:{
     
      goLogin(){
          this.$router.push({path:'/Dlogin'});
          this.$router.go(0);
    
      }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.regiset{
    font-size:20px;
    width:100%; 
    background: white;
    text-align: center;

}
.zhuti{
    width:100%;
    margin-bottom:10rem;
    .juanpi{
        width:5rem;
        height:5rem;
        margin:3rem auto;
    }
    .top{
        width:80%;
        height:3rem;
        background:red;
        font-size:25px;
        color :white;
        line-height: 3rem;
        border-radius:30px;
        margin:0 auto;
    }
    span{
        display: flex;
        justify-content:center;
        align-items: center;
    }
    .zhuce{
        margin-top:1rem;
    }
    span .weixin{
            width:2rem;
            height:2rem;
        }
    .denglv{
        color:#666;
    }    
       
}
</style>
