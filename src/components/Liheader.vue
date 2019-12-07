<!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-02 14:08:09
 -->
<template>
  <div class="hello">
       <div id="istop" >
          <i class="el-icon-chat-line-round"></i>
          <div id="Search" @click="jump">
              <input type="text" :placeholder='search'>
              <i class="el-icon-search">&nbsp;&nbsp;&nbsp;&nbsp;</i>
          </div>
          <i class="el-icon-menu"></i>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Liheader',
  data () {
    return {
        search:"搜 索"
    }
  },
  methods:{
    jump(){
      this.$router.push('/LsearchPage');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #istop{
    width: 100%;
    height: .14rem;
    background-color: #ff464e;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    color: aliceblue;
  }
  #istop i{
    font-size: .06rem;
  }
  input{
    width: .45rem;
    height: .06rem;
    outline: none;
    border: none;
    margin-left: 40px;
  }
  #Search{
    border-radius: .05rem;
    width: .6rem;
    padding: 2px;
    background-color: #fff;
    height: .06rem;
    position: relative;
   }
  #Search i{
    position: absolute;
    font-size: 14px;
    left: 10px;
    top: 8px;
    color: black;
  }
</style>
