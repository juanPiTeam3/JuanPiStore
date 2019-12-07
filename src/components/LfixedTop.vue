<!--
 * @Author: your name
 * @Date: 2019-11-28 21:17:55
 * @LastEditTime: 2019-11-29 17:22:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\LfixedTop.vue
 -->
<template>
	<div class="top">
       <back></back>
       <ul>
           <li v-bind:class="{active: active===0}"  @click="scrollTo(0)">商品</li>
           <li v-bind:class="{active: active===1}"  @click="scrollTo(1)">评价</li>
           <li v-bind:class="{active: active===2}"  @click="scrollTo(2)">详情</li>
       </ul>
       <div class="bottom">
        <i class="iconfont icon-icon-test"></i>
        <i class="iconfont icon-gengduo"></i>
    
       </div>
	</div>


</template>
<script>

import back from './back'
	export default{
		name:'top',
		data(){
			return{
            active:0

         }
       },
       components:{
           back
       },
       	mounted (){
			window.addEventListener('scroll', this.handleScroll,false)
			},
			methods:{
				handleScroll () {
                // 获取所有锚点元素
                const navContents = document.querySelectorAll('.content .ll');
					// console.log(navContents);
					
                    // 所有锚点元素的 offsetTop
                    const offsetTopArr = [];
                    navContents.forEach(item => {
                        offsetTopArr.push(item.offsetTop)
					});
					
                   
                    // 获取当前文档流的 scrollTop
                    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                    // 定义当前点亮的导航下标
                    let navIndex = 0
                    for (let n = 0; n < offsetTopArr.length; n++) {
                        // 如果 scrollTop 大于等于第n个元素的 offsetTop 则说明 n-1 的内容已经完全不可见
                        // 那么此时导航索引就应该是n了
                        if (scrollTop >= offsetTopArr[n]-100) {
                         
                                 navIndex = n;
                        }
                    }
                         this.active = navIndex;
			},
                scrollTo(index) {
                // 获取目标的 offsetTop
                // css选择器是从 1 开始计数，我们是从 0 开始，所以要 +1
                // const targetOffsetTop = document.querySelector(`.content .ll:nth-child(${index+1})`).offsetTop;
              
                const targetOffsetTop = document.getElementsByClassName('ll')[index].offsetTop;
                  
                // 获取当前 offsetTop
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                // 定义一次跳 50 个像素，数字越大跳得越快，但是会有掉帧得感觉，步子迈大了会扯到蛋
                    const STEP = 50;
                    // 判断是往下滑还是往上滑
                    if (scrollTop > targetOffsetTop) {
                        // 往上滑
                        smoothUp()
                    } else {
                        // 往下滑
                        smoothDown()
                    }
                     // 定义往上滑函数
                function smoothUp() {
                    if (scrollTop > targetOffsetTop) {
                    if (scrollTop - targetOffsetTop >= STEP) {
                        scrollTop -= STEP
                    } else {
                        scrollTop = targetOffsetTop-50
                    }
                    document.body.scrollTop = scrollTop
                    document.documentElement.scrollTop = scrollTop
                    requestAnimationFrame(smoothUp)
                    }
                 }
                      function  smoothDown() {
                    // 如果当前 scrollTop 小于 targetOffsetTop 说明视口还没滑到指定位置
                    if (scrollTop < (targetOffsetTop-50)) {
                    // 如果和目标相差距离大于等于 STEP 就跳 STEP
                    // 否则直接跳到目标点，目标是为了防止跳过了。
                    if (targetOffsetTop - scrollTop >= STEP) {
                        scrollTop += STEP
                    } else{
                        scrollTop = targetOffsetTop-50
                    }
                    document.body.scrollTop = scrollTop
                    document.documentElement.scrollTop = scrollTop
                    // 关于 requestAnimationFrame 可以自己查一下，在这种场景下，相比 setInterval 性价比更高
                    requestAnimationFrame(smoothDown)
                    }
                }
           }
  },
            
			destroyed () {
				window.removeEventListener('scroll', this.handleScroll)
				}
        
    }
</script>
<style scoped>
.bottom{
    width:.73rem;
    height:.46rem;
    float: right;
    line-height: .46rem;
}
.active{
    color:#fe4b51;
     border-bottom: 2px solid #fe4b51;
}
.iconfont{
	color:#505050;
	font-size: .22rem;
	display: inline-block;
	/* margin-top:.04rem; */
}
.icon-gengduo{
    margin-left:.1rem;
}
.top{
    width:100%;
    height:.46rem;
    background:#fff;
    position: fixed;
    left:0;
    top:0;
    z-index: 10;
}
ul{
    margin-left:.3rem;
    width:2rem;
    height:100%;
  float: left;
    
}
li{
    width:.58rem;
    height:100%;
    line-height: .46rem;
    display: inline-block;
    text-align: center;
   
}

</style>
