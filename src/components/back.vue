<!--
 * @Author: your name
 * @Date: 2019-11-28 21:26:20
 * @LastEditTime: 2019-11-28 23:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\back.vue
 -->
<template>
	<div class="back">
	   <i class="iconfont icon-fanhui" @click="goback"></i>
   </div>

</template>
<script>
export default{
	name:'goback',

	data(){
		return{

		}
	},
	methods:{
		goback(){
			//因为router有历史记录这一功能
			 this.$router.go(-1);
		}
	}

}
</script>
<style scoped>
.back{
	height:100%;
	width:.48rem;
	text-align: center;
	float: left;

}

.iconfont{
	font-size: .22rem;
	color: #adadab;
	
	line-height: .46rem;
}


</style>
