<!--
 * @Author: your name
 * @Date: 2019-11-26 16:42:18
 * @LastEditTime: 2019-11-29 23:59:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\pages\LdetailPage.vue
 -->
<template>
	<div class="box">
	
		    <LfixedTop2 class="top1"  :style="{opacity: active1}"></LfixedTop2>
			
			<LfixedTop  class="top2" :style="{opacity: active2}"></LfixedTop>

		
		<div class="content">
            <Ldetails class="hh"></Ldetails>           
        
			<Lcoments></Lcoments>  
			<Lstore ></Lstore>         
	       <LdetailShow></LdetailShow>
		</div>
    
		<Lfooter></Lfooter>

	
	</div>
</template>
<script>


import Lcoments from '../components/Lcoments';
import LfixedTop from '../components/LfixedTop';
import LfixedTop2 from '../components/LfixedTop2';
import Lfooter from '../components/Lfooter';
import Ldetails from '../components/Ldetails';	
import LdetailShow from '../components/LdetailShow';
import Lstore from '../components/Lstore';

	export default{
		name:'loginPage',
		data(){
			return{
				active1:'1',
				active2:'0',
			    
			}
		},
		components:{
		  Ldetails,LdetailShow,Lfooter, 
		  LfixedTop,LfixedTop2,Lcoments,Lstore
		},
		mounted (){
			window.addEventListener('scroll', this.handleScroll,false)
			},
			methods:{
				handleScroll () {
					let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					// console.log(scrollTop)
					let containerH=document.getElementsByClassName('swiper-container')[0].offsetHeight;
					var a =1// 所要滑动的元素内容的高度
					// 所要滑动的元素内容的高度
					
					// let top1=document.getElementsByClassName('top1')[0];
					// let top2=document.getElementsByClassName('top2')[0];
					//  console.log(containerH);
						if(scrollTop >=(containerH/3)){
							 a=scrollTop / containerH;
							//  console.log(a);
							this.active1=1-a;
							
							this.active2=a;
							
							
						}else{
                            this.active1=a;
							
							this.active2=1-a;
							
						}
					}

			},
			destroyed () {
				window.removeEventListener('scroll', this.handleScroll)
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