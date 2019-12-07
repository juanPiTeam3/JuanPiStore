<!--
 * @Author: your name
 * @Date: 2019-11-28 21:17:55
 * @LastEditTime: 2019-11-29 17:23:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\LfixedTop.vue
 -->
<template>
	<!-- <div class="top">
       <back></back>
       <ul>
           <li>商品</li>
           <li>评价</li>
           <li>详情</li>
       </ul>
       <div class="bottom">
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-gengduo"></i>
    
       </div>
	</div> -->
        <div class="top">
            <div class="goback"><i class="iconfont icon-fanhui1"></i></div>
            <div class="goback"><i class="iconfont icon-ziyuan"></i></div>
             <div class="goback"><i class="iconfont icon-icon-test"></i></div>
        </div>


</template>
<script>


	export default{
		name:'top',
		data(){
			return{
         
         }
       },
      
        
    }
</script>
<style scoped>
.iconfont{
    display: inline;
    font-size:.2rem;
    color:#fff;
    text-align: center
}
.top{
    
   
     width:100%;
    height:.46rem;
    z-index: 10;
    line-height: .36rem;
    position: fixed;
    left:0;
    top:0; 
  
}
.goback{
    text-align: center;
    margin:0 auto;
     border-radius: 50%;
    width:.32rem;
    height:.32rem;
    /* display: inline-block; */
    background: rgba(0,0,0,.3);

}
.top div:nth-child(1){
    float: left;
    margin-left: 14px;
     margin-top:6px;
}
.top div:nth-child(2){
    float: right;
    margin:0 12px;
    margin-top:6px;

}
.top div:nth-child(3){
    float: right;
     margin-top:6px;
}
</style>
