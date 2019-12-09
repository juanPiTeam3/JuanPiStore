<template>
	<div class="footer">
       
		<ul class="liss">

			<li>
				<div class="fir" >
						<i class="iconfont icon-kefu"></i>
						<label>客服</label>
					</div>
			</li>
			<li>
			    <div class="fir sec" @click="cars">
					
					<i class="iconfont icon-gouwuche1">
						<span  :class="[shops.length==''?Isshow:number]"
						>{{length}}</span>
						</i><label>购物车</label>
				</div>
			</li>
			
			<li @click="firstShow" >
			   <label>立即购买</label>
			</li>
             <mt-popup v-model="Visible"  position="bottom" class="show">
				<div class="top">
					<div class="one">
						<img :src='img' alt="">
					</div>
					<div class="two">
						<p>{{'￥'+shoppingcars.price}}</p>
						<div class="select">{{selectmore}}&nbsp;&nbsp;{{more}}</div>
					</div>
					<div class="three" @click="close">
						<i class="iconfont icon-guanbi1"></i>
					</div>                                                            
				</div>
				<div class="middle">
					<div class="m1">
						<span>颜色</span>
						<div class="more">
							
							<div v-for="(color1,index) in shoppingcars.color" :key="index" 
							   :class="[currIndex==index?IsActive:'']"  ref="chosebox"
							    @click="look1(index,$event)">{{color1}}</div>
							
						</div>
					  <span class="size">尺寸</span>
						<div class="more">
							<div  v-for="(size1,index) in shoppingcars.size" :key="index"  ref="chosebox"
							:class="[Index==index?IsActive:'']"  @click="look2(index,$event)">{{size1}}</div>
							
					    </div>
				     </div>	
					  <span class="tipBox" v-show="tipShow" >
						{{msg}}
					</span>
				</div>
				<div class="bottom">
					<span>购买数量</span>
					
				    <el-input-number size="small" v-model="num"  :min="1" :max="10" class="small"></el-input-number>
				</div>
				<div class="foot" @click="gobuy">
					确定
				</div>
				
				

			</mt-popup>
			<li  @click="show" class="lat">
				<label class="last">加入购物车</label>
				
			</li>
			 <mt-popup v-model="popupVisible"  position="bottom" class="show"> 
				<div class="top">
					<div class="one">
						<img :src='img' alt="">
					</div>
					<div class="two">
						<p>{{shoppingcars.price}}</p>
						<div class="select">{{selectmore}}&nbsp;&nbsp;{{more}}</div>
					</div>
					<div class="three" @click="close">
						<i class="iconfont icon-guanbi"></i>
					</div>                                                            
				</div>
				<div class="middle">
					<div class="m1">
						<span>颜色</span>
						<div class="more">
							
							<div v-for="(color1,index) in shoppingcars.color" :key="index" 
							   :class="[currIndex==index?IsActive:'']" 
							    @click="look1(index,$event)">{{color1}}</div>
							
						</div>
					  <span class="size">尺寸</span>
						<div class="more">
							<div  v-for="(size1,index) in shoppingcars.size" :key="index"
							:class="[Index==index?IsActive:'']"  @click="look2(index,$event)">{{size1}}</div>
							
					    </div>
				     </div>	
					 <span class="tipBox" v-show="tipShow" >
						{{msg}}
					</span>
				</div>
				<div class="bottom">
					<span>购买数量</span>
					
				    <el-input-number size="small" v-model="num"  :min="1" :max="10" class="small"></el-input-number>
				</div>
				<div class="foot" @click="comfirm" >
					确定
				</div>
				
			</mt-popup> 

		</ul>
	</div>

</template>
<script>

import axios from "axios";
	export default{
		name:'myfooter',
		data(){
			return{
			tipShow:false,
			msg:'请选择颜色和尺码',
			 popupVisible:false,
			  visible: false,
			  num: 1,
			 selectmore: ' 颜色',
			 more:' 尺码',
			IsActive:"active",
			img:'',
			count:1,
			shoppingcars:'',
			currIndex:-1,
			Index:-1,
			value:'',
			shops:[],
			Isshow:"show",
			number:"number",
			length:'',
			Visible:false,
			buyCount:0,
			path:'LdetailPage',
			id:''
			
         }
	   },
	   methods:{
		//    cars(){
			   //这是通过异步请求获取后端的购物车数据
			//    let path=LdetailPage;
		// 	   this.$store.dispatch('getCarData');
		// 	   this.$router.push({path:'/LpurchasePage',
        //                 query: {
        //                         path:this.path
        //                     }
        //         });
		//    },
		   
		   cars(){
			   var goodsData = [
					{
						"id":"001",
						"price":"109",
						"img":"static/img/a6.jpg",
						"num":"1",
						"title":"商场同款韩版厚羽绒服",
						"color":"黑色",
						"size":"165/88A/L"
					},
					{
						"id":"002",
						"price":"169",
						"img":"static/img/a5.jpg",
						"num":"3",
						"title":"时尚修身显瘦羽绒服",
						"color":"军绿色",
						"size":"160/80A/M"
					}
				
				 ]
				//  console.log(Array.isArray(goodsData))
					// this.$store.commit('carGoods',goodsData);
					this.$router.push({path:'/WshoppingCar',
							query: {
									path:this.path
								}
					});
		// 		axios(
		// 			{
		// 				method: 'POST',
		// 				data:newData,
		// 				url:'purchaseCar'
		// 			}
		// 		)
		// 		.then(res=>{
		// 		})
		// 		.catch(err=>{
		// 			console.log(err);
		// 		})
		//  },
		   },    
		   show(){
               this.popupVisible=true;
		   },
		   close(){
			  this.popupVisible=false; 
			  this.Visible=false; 
		   },
		   look1(index,e){
				this.currIndex=index;
				this.IsActive="active";
				let val=e.target.innerText;

				this.selectmore="已选择:"+val;
				
					this.img=this.shoppingcars.img[index];
					// console.log(this.img)
				
			 },
			 look2(index,e){
			   this.Index=index;
              
			   let txt=e.target.innerText;
			   this.more=txt;
		 },
		 firstShow(){
             this.Visible=true;
		 },
		 comfirm(){
			 let childLength=document.getElementsByClassName('more')[0].children.length;
			//  console.log(childLength);
			  var chosedom=this.$refs.chosebox;
			//   console.log(chosedom);
			  let counter=0;
			 for (var i=0;i<chosedom.length;i++){
				   chosedom[i].setAttribute('Index', i);
					if(chosedom[i].className=="active")
					{  
					 var indexCount= chosedom[i].getAttribute('Index');
						counter++;
						// console.log(indexCount);
					}
				}
			   if(counter==0){
					this.tipShow=true;
					 setTimeout(()=>{
						this.tipShow=false;
						},2000);
					  return;
				}else if(counter==1){
					if( indexCount<=childLength-1){
                        this.tipShow=true;
						this.msg='请选择颜色';
						setTimeout(()=>{
							this.tipShow=false;
							},2000);
						return;
					}else if( indexCount>childLength-1){
						this.tipShow=true;
						this.msg='请选择尺码';
						setTimeout(()=>{
							this.tipShow=false;
							},2000);
						return;
						}
				}
			 this.value=JSON.parse(localStorage.getItem('username'));
			 console.log(this.value)
			 if(this.value==null){
                setTimeout(()=>{
			    this.$router.push({path:'LaddressPage'});
				},1000);
			}else{
                 axios.get('shops')
					.then(res=>{
						this.shops =res.data;
						this.popupVisible=false;
						this.length=this.shops.length;
					})
					.catch(err=>{
						console.log(err);
					})
			}
			
              
				
		 },
		 gobuy(){
			  let childLength=document.getElementsByClassName('more')[0].children.length;
			//  console.log(childLength);
			  var chosedom=this.$refs.chosebox;
			//   console.log(chosedom);
			  let counter=0;
			 for (var i=0;i<chosedom.length;i++){
				   chosedom[i].setAttribute('Index', i);
					if(chosedom[i].className=="active")
					{  
					 var indexCount= chosedom[i].getAttribute('Index');
						counter++;
						
					}
				}
			   if(counter==0){
					this.tipShow=true;
					 setTimeout(()=>{
						this.tipShow=false;
						},2000);
					  return;
				}else if(counter==1){
					if( indexCount<=childLength-1){
					
                        this.tipShow=true;
						this.msg='请选择颜色';
						setTimeout(()=>{
							this.tipShow=false;
							},2000);
						return;
					}else if( indexCount>childLength-1){
						this.tipShow=true;
						this.msg='请选择尺码';
						setTimeout(()=>{
							this.tipShow=false;
							},2000);
						return;
						}
			    }
			
			 
				 let num=document.getElementsByClassName('el-input__inner')[0].value;
				//   this.buyCount++;
				//   console.log(this.buyCount)
				 this.$store.commit('buyNum', {
					 color:this.selectmore,
					 fontSize:this.more,
					 buyNum:num,
					 price:this.shoppingcars.price,

					

				 }),
				//  this.$store.commit('Buynumber',this.buyCount);
				 this.$router.push({path:'/LpurchasePage'});
			 }
		 
	 },
	   created(){
		      this.id=this.$store.state.goodsId;
				axios.get('shoppingcar/'+this.id)
				.then(res=>{
					// console.log(res.data);
                   this.shoppingcars =res.data;
					this.img=this.shoppingcars.img[0];
					// console.log(this.img)
				})
				.catch(err=>{
					console.log(err);
				})
			}
	}
</script>

<style scoped>
.tipBox{
	position: absolute;
	left:29%;
	top:60%;
	display: inline-block;
	padding:0 .2rem;
	height:.45rem;
	background: rgba(0, 0,0, .7);
	color:#fff;
	text-align: center;
	line-height: .45rem;
}
.show{
	display: block;
}

.number{
	position: absolute;
	left:25px;
	top:-2px;
	display: inline-block;
	border-radius: 50%;
	background:#ff454c;
	color: #fff;
	font-size:12px;
	width:.15rem;
	height:.15rem;

}
.icon-gouwuche1{
	position: relative;
}
 .active{
	color:#fff;
	background: #fe474c  !important;
	border:none !important;
}
.error{
	border:1px solid #4b4b4b;
	background: #fff;
	color:#2e2e2e ;
}
.foot{
	width:100%;
	height:.5rem;
	text-align: center;
	letter-spacing: 4px;
	font-size: .18rem;
	color:#fff;
	background: #fe474c;
	line-height:.5rem;
}
.bottom{
	width:92%;
	padding:0 .15rem;
	justify-content: space-between;
	 display: flex;
     margin:.28rem 0;
	align-items: center;
	
}
.bottom span{
	display: block;
	color:#212121;
	font-size:.15rem;
}

label{
	display: inline-block;
	color:#8c8c8c;
	font-size:.16rem;
}
.size{
	margin-top:.23rem;
}
.more{
	width:100%;
	display: flex;
	justify-content:left;
	flex-wrap: wrap;
}
 .more div{
	margin-top:.14rem;
	width:1.05rem;
	margin-right:.1rem;
	text-align: center;
	line-height: .35rem;
	height:.35rem;
	border:1px solid #4b4b4b;
}
.more div:nth-child(3){
	margin-right: 0;
}
.middle{
	width:100%;
	position: relative;
	
}
.m1{
	padding:0 .15rem;
}
.m1 span{
	text-indent: 8px;
	display: block;
	color:#2b2b2b;
	font-size:.14rem;
	line-height: .14rem;
}
.top{
	display: flex;
	position: relative;
	width:100%;
	height:.84rem;
}
.one{

	position: absolute;
	left:.2rem;
	top:-.4rem;
	width:1.04rem;
	height:1.04rem;
}
.one img{
		z-index: 10;
	width:100%;
	height:100%;
}
.show{
	width:100%;
	
	z-index: 5;
	/* height:4.25rem; */
}
.icon-guanbi{
	font-size:.1rem;
	color:#e1e1e1;
}
.two{
	width:4.5rem;
	height:100%;
	margin-left:1.35rem;
	margin-top:12px;
}
.three{
	height:100%;
	line-height: .54rem;
	margin-right: .13rem;
}
.select{
	width:100%;
	font-size:.13rem;
	color:#282828;
}
.two p{
	width:100%;
	color:#d84a4e;
	font-size:.16rem;
}
.iconfont{
	color:#505050;
	font-size: .22rem;
	display: block;
	/* margin-top:.04rem; */
}


.footer{
	position: fixed;
	bottom:0;
	left:0;
	width: 100%;
	height: .5rem;
    margin-top:.5rem;
	z-index: 12;
     background: #fff;
	
	
}
ul{
	width:100%;
    height:100%;
    display: flex;
   align-items: center;
    height: 100%;
	
}
li{
	height:100%;
	align-items: center;
	text-align: center;
}
ul li:nth-child(1){
    padding-top:5px;
width:13.3%;
}
ul li:nth-child(2){
    padding-top:5px;
width:13.3%;
}
ul li:nth-child(2) label{

color:#707070;

}
ul li:nth-child(1) label{

color:#707070;

}
ul li:nth-child(3){
width:29.3%;

}
ul li:nth-child(3) label{
width:100%;
height:100%;
line-height:.5rem; 
font-size:.17rem;
font-weight: 700;
color:#1d1d1d;

}
.lat{
width:44%;
}
label{
    margin-top:0;
    display: block;
}
.last{

display: block;
width:100%;
 height: 100%;
line-height:.5rem; 
background:#fe474c;
font-size:.17rem;
color: #fff;
}



em{
	
	display: inline-block;
	width:.39rem;
	height:.39rem;
	border-radius: 100%;
	position:relative;
	background-size: 100%;
	margin-top:4px;
}



</style>
