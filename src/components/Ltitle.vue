<!--
 * @Description: 首页导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-03 10:41:31
 -->
<template>
  <div class="box">
      <div id="center">
          <i class=" el-icon-star-on"></i>
         <span>精选口碑好货·买过的都说好！</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Ltitle',
  data () {
    return {
        
    }
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .box{
        width: 100%;
        height: .25rem;
        background-color: #fff;
        margin-top: 20px;
    }
    #center{
        height: 50px;
        text-align: center;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    i{
        color: #ff4627;
        font-size: 24px;
        /* margin-left: -340px; */
        margin-top: -73px;
        /* display: block; */
        /* line-height: .25rem; */

    }
    span{
        font-size: 24px;
        display: block;
        font-weight: 600;
        margin-top: -70px;
    }
</style>
