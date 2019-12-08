<!--
 * @Author: your name
 * @Date: 2019-11-26 16:42:18
 * @LastEditTime: 2019-12-04 14:42:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\pages\LdetailPage.vue
 -->
<template>
	<div class="box">
	
		 <login :from="from">
		 </login>
	</div>
</template>
<script>


import login from '../components/login';


	export default{
		name:' Login',
		props:['from'],
		data(){
			return{
				
			    
			}
		},
		components:{
		 login
		}
			

			
	}
</script>
<style scoped>
.box{
	width:100%;
background: #f3f4f8;
}
.content{
	flex: 1;
	  overflow-y: auto;

}

</style>