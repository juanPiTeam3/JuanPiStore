<!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 14:55:32
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
    height: 35px;
    background-color: #ff464e;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    color: aliceblue;
  }
  input{
    outline: none;
    border: none;
    margin-left: 40px;
    display: block;
  }
  #Search{
    border-radius: .05rem;
    width: 2.2rem;
    padding: 2px;
    background-color: #fff;
    height: .16rem;
    position: relative;
   }
  #Search i{
    position: absolute;
    font-size: 15px;
    left: 10px;
    top: 4px;
    color: black;
  }
</style>
