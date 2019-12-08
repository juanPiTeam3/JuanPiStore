
<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 16:19:30
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:31:18
 -->

<template>
<div id="box">
    <ul>
        <li :class="isactive==index?'red':''" v-for="(item,index) in footers" :key="index" @touchstart='clk(index)'>
                <!-- :class="isactive==index?'addclass':''" -->
                <span  class="iconfont" :class="item.spanclass"></span>
                <span>{{item.title}}</span>  
        </li>      
    </ul>
</div>
</template>
<script>
export default {
  name: 'Lfooter',
  data () {
    return {
      isactive:0,
      footers:[
          {
              "spanclass":"icon-shouye2",
              "title":"首页"
          },
              {
              "spanclass":"icon-pinpaiqingcang",
              "title":"品牌清仓"
          },    {
              "spanclass":"icon-9",
              "title":"9块邮"
          },    {
              "spanclass":"icon-gouwuche",
              "title":"购物车"
          },    {
              "spanclass":"icon-wodedangxuan",
              "title":"我的卷皮"
          }
      ]
    }
  },
  methods:{
      clk(index){
          this.isactive=index;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #box{
       width: 100%;
       height: 40px;
   }
    ul{
        background-color: rgb(247, 247, 247);
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    li{
        font-size: 16px;
        margin-left: 25px;
        text-align: center;
    }
    span{
        display: block;
    }
    span:first-child {
        font-size: 22px;
    }
    .red{
        color: #ff464e;
    }




</style>
