<!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-03 10:21:20
 -->
<template>
  <div class="box">
      <div id="top">
          <div><img src="../assets/img/b1.gif" alt=""><span>最后疯抢</span></div>
          <div><img src="../assets/img/b2.gif" alt=""><span>尾货清仓</span></div>
          <div><img src="../assets/img/b3.gif" alt=""><span>签到领现金</span></div>
          <div><img src="../assets/img/b4.gif" alt=""><span>生活超市</span></div>
          <div><img src="../assets/img/b5.gif" alt=""><span>皮皮农场</span></div>
      </div>
      <div id="bottom">
          <img src="../assets/img/bb2.gif" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Llist',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top{
    width: 100%;
    background-color:#fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#top div{
     width: 23%;
    }
#top span{
    display: block;
    font-size: 14px;
    text-align: center;
}
#top img{
    width: 70%;
    display: block;
    margin-left: 10px;
}
#bottom{
    width: 100%;
    padding: 20px 0;
    background-color: #fff;
}
#bottom img{
    width: 100%;
    height: 100%;
    display: block;
}

</style>
