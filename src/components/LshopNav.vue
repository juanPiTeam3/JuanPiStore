<!--
 * @Description: 首页导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-08 15:09:16
 -->
<template>
  <div class="box">
    <ul>
        <li :class="isactive==index?'red':''"  @click="clk(index)" @touchstart="changetype(item.name)" v-for="(item,index) in lis" :key="index">{{item.name}}            
            <div  v-bind:class='{"isRed":isA,"isBlack":!isA}' @click="toggle"></div>         
        </li>

    </ul>
 
  </div>
</template>

<script>
export default {
  name: 'LshopNav',
  data () {
    return {
       lis:[
            {
                "name":"推荐",
                "icon":""
            },
            {
                "name":"价格",
                "icon":"el-icon-d-caret"
                // "icon":"el-icon-arrow-up",
            },
            {
                "name":"销量",
                "icon":""
            },
            {
                "name":"筛选",
                // "icon":"el-icon-sort"
                "icon":""

            }
       ],
        isactive:0,
        isShow:false,
        isA:true,
        count:0

    }
  },
  methods:{
    //   点击按钮让其变色
      clk(index){
        this.isactive=index;
      },
    //  点击按钮改变class名 
      toggle:function(){
          this.isA=!this.isA;
      },
    //   点击按钮获取点的是哪一个
      changetype(typename){
        // 存放的点击的是哪一个
        this.$store.commit("changetype",typename)
        // 让数据发生变化
        this.count++;
        let num=this.count;
        this.$store.commit("cteateNum",num);
      },
     
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul{
        width: 100%;
        margin: 0 auto;
        height: .4rem;
        background-color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .red{
        color: #ff454e;
    }
    li:nth-child(4) div{
        width: 30px;
        height: 21px;
        float: right;
    }
    .isRed{
         background: url(../../static/img/sort_sprite.png); 
         background-position: -47px 30px;
    }
    .isBlack{
        background: url(../../static/img/sort_sprite.png); 
         background-position: -80px 30px;
    }

  
</style>
