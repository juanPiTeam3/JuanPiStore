<!--
 * @Descripttion: "后退箭头"
 * @version: v1.0.0
 * @Author: 
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-27 20:15:49
 -->
<template>
    <div class="box">
        <!--左箭头--> 
        <i  class="el-icon-arrow-left" @click='back()'></i>
        <div id="right">
            <i class="el-icon-share"></i>
            <i  id="last" class="el-icon-more"></i>
        </div>
    </div>  
</template>

<script>

export default {
  name: 'Back',
  data () {
    return {
      isShow:true
    }
  },
  methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style scoped>
.box{
    width: 100%;
    background-color: #fff;
    /* margin: 0 auto; */
    display: flex;
    justify-content: space-between;
}
i{
    font-size: 30px;
    color:rgb(177, 177, 177);
}
#right{
    width: 30%;
}
#right i{
    display: block;
}
#last{
    margin-left: 54px;
    margin-top: -30px;
}


</style>
