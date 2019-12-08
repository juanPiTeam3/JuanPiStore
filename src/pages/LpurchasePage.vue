<!--
 * @Author: your name
 * @Date: 2019-11-26 16:42:18
 * @LastEditTime: 2019-12-04 15:20:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\pages\LdetailPage.vue
 -->
<template>
	<div class="box">
	    <LbuyTop class="toper"></LbuyTop>
		<div class="center">
			<LbuyAddress></LbuyAddress>	
			<LbuyGoods></LbuyGoods>	
			<Lpayment></Lpayment>
		</div>				
		 <LbuyFooter></LbuyFooter>	
	</div>
</template>
<script>


import LbuyTop from '../components/LbuyTop';
import LbuyAddress from '../components/LbuyAddress';
import LbuyGoods from '../components/LbuyGoods';
import Lpayment from '../components/Lpayment';
import LbuyFooter from '../components/LbuyFooter';


	export default{
		name:'LpurchasePage',
		
		data(){
			return{
				
			    
			}
		},
		components:{
		LbuyAddress, LbuyTop,LbuyGoods, Lpayment,LbuyFooter
		}
	
	

			
	}
</script>
<style scoped>
.center{
	flex: 1;
overflow-y: auto;

}

.box{
	width:100%;
background: #f3f4f8;
}


</style>