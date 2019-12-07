<!--
 * @Author: your name
 * @Date: 2019-12-02 10:13:45
 * @LastEditTime: 2019-12-02 19:45:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\Lpurchase.vue
 -->

<template>
<div class="box">
    <div class="top">
        <back></back>
        <h2>结算</h2>
    </div>
 </div>	

</template>
<script>
import back from './back';
export default{
	name:'Lpurchase',

	data(){
		return{

		}
    },
    components:{
        back
    },
	methods:{
		
	}

}
</script>
<style scoped>
.box{
     position: fixed;
	top:0;
	left:0;
	z-index: 2;

    width:100%;
    background: #fff;
}
.top{
    width:100%;
    height:.5rem;
}
h2{
    text-align: center;
    height: 100%;
    line-height: .5rem;
    
}
</style>
