<!--
 * @Descripttion: "轮播图"
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 14:35:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-06 14:06:42
 -->
<template>
    <div class="box">   
      <div class="top">
          <back></back>
          <div class="bao">
               <h3>添加地址</h3>
               <p class="P" @click="save">保存</p>
          </div>
    </div>
       <div class="middle">
            <mt-field label="收货人"  type="text" class=" p1"></mt-field>
            <mt-field label="手机号码"  type="tel" class="p2" ></mt-field>
           
            <mt-field label="所在地区" type="text" class="icontxt p4">
                <div class="city" @click="toAddress">{{city}}</div>
            
            
            </mt-field>

            
            <mt-field label="详细地址" class="p3" type="text"  @blur.native.capture="changeColor"></mt-field>
            <div class="icon">
               <i class="iconfont icon-tongxunlu"></i>
               <p class="p">选联系人</p>
            </div>
           <div class="divwrap"  v-show="mask">
                <v-distpicker type="mobile" @selected='selected' v-show="addInp">
                </v-distpicker>
            </div>
             
            
      </div>
      <div class="default">
          <p>设置为默认的收货地址</p>
          <el-switch  v-model="value" active-color="#afacac" inactive-color="#fe474c">
          </el-switch>
      </div>
       <div class="delete">
         删除此地址
         
      </div>
    </div>  
</template>

<script>

import back from '../components/back';
import VDistpicker from 'v-distpicker'
export default {
  name:'LaddressPage',
 
  data () {
    return {
           city:'请选择',
            addInp :false,
            mask:false,
            userInfor:'',
            path:'LaddressPage',
           value: true
    }
  },
  components:{
      back,VDistpicker 
  },
  methods:{
       toAddress(){
        this.mask = true;
        this.addInp = true;
     },
 // 省市区三级联动
    selected(data){
        this.mask =false;
        this.addInp = false;
        this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value

      },
      changeColor(){
        let p=document.getElementsByClassName('P')[0];
         p.style.color="black";
        // console.log(p2.value)
       
       
      },
      save(){
            let  path=this.path;
          let  p1=document.getElementsByClassName('mint-field-core')[0].value;
           let p2=document.getElementsByClassName('mint-field-core')[1].value;
           let  p3=document.getElementsByClassName('city')[0].innerHTML;
        //    console.log(p3);
          let p4=document.getElementsByClassName('mint-field-core')[3].value;
            // console.log(p4);
            // console.log(p3);
            // console.log(p2);
            // console.log(p1);

             if(p1.value!=''&& p2.value!=''&& p3.innerHTML!=''&& p4.value!=''){
                 this.userInfor={
                    user:p1,
                    phone:p2,
                    address:p3,
                    detailAddress:p4

                };
                
             }
            //  console.log(this.userInfor);
             if(this.userInfor!=null){
                   this.$store.commit('userInfo',this.userInfor ); 
                    let  toPurchasePath=this.$route.query.path;
                    console.log(toPurchasePath);
                   if(toPurchasePath=='LdetailPage02'){
                        this.$router.push({path:'/LpurchasePage',
                                    query: {
                                            path:toPurchasePath
                                        }
                                });
                        }else{
                            this.$router.push({path:'/LpurchasePage',
                                      query: {
                                            path:this.path
                                        }  
                                });
                        } 
                //  this.$router.push({path:'/LpurchasePage',
                //         query: {
                //                 path:path
                //             }
                // });
             }
                    
           
      }
  }
  
}
</script>


<style scoped>
.delete{
width:100%;
height:.51rem;
text-align: center;
color:#fe3c43;
font-size:.18rem;
line-height: .51rem;
background: #fff;
margin-top:.23rem;
}
.default{
    margin-top:12px;
    justify-content: space-between;
    display: flex;
  align-items: center;
    width:96%;
    height:.46rem;
    background: #fff;
    padding-left: 13px;
}
.default p{
    color:#636363;
    font-size:14px;
   
}
.p1{
    color:#949494;
}
.p2{
    color:#949494;
}
.p3{
    color:#949494;
}
.p4{
    color:#949494;
}
.city{
 padding-right: .2rem;
 color: black;
}
 .divwrap{
        height:100%;
       
        background: rgba(0, 0, 0, .5);
        width: 100%;
          /* overflow: hidden; */
       position: fixed;
        top:0;
        left:0;
       z-index: 2;
      
    }
    .divwrap>>>.distpicker-address-wrapper{
        color: #999;
        background: #fff;
        width:86%;
        height:5.95rem;
         overflow-y: auto;
        margin:.3rem auto;
        /* overflow: hidden; */
    }
    .divwrap>>>.address-header{
       
        width: 100%;
     text-align: center;
    }
    .divwrap>>>.distpicker-address-wrapper ul  li{
        flex-grow: 1;
        text-align: center;
        height:.3rem;
        color:black;
          border-bottom: #f3f6f8 solid .5px;
       
    }
    
    .divwrap>>>.address-container .active{
        color: #000;
    }
.mask{
    height:100%;
    width:100%;
    background: rgba(0,0, 0, .4)
}
 .divwrap>>>.distpicker-address-wrapper .address-header ul li.active{
        border-bottom: #dedfe0 solid 1px;
}

.bottom{
    /* height:.34rem; */
    width:100%;
}
.p1{
   margin:0;
  width:100%;
   
   line-height: .12rem;
    color:#949494;
    font-size:.12rem;  
}
.icontxt{
    position: relative;
}
.icon-tongxunlu{
    display: block;
    width: 100%;
    height:50%;
  line-height: .38rem;
    color:#fe4449;
    font-size:.18rem ;
}
.icon-gouwuche{
   display: block;
    width: 100%;
   
     height:.18rem;
    color:#fe4449;
    font-size:.16rem ;  
}
.icon1{
       
text-align: center;
    position: absolute;
    right: 0;
    top:-.22rem;
    width:.62rem;
    height:.3rem;
    border-left: 1px solid #eaeaea;
}
.p{
    margin:0;
  width:100%;
    height:50%;
    line-height: .305rem;
    color:#949494;
    font-size:.12rem;
}
.icon{
    
text-align: center;
    position: absolute;
    right: 0;
    top:0;
    width:.62rem;
    height:.64rem;
    border-left: 1px solid #eaeaea;
}
.middle{
    position: relative;
    width:100%;
}
.mint-cell-text {
    color:#989898 !important;
}
p{
    color:#cdcdcd ;
    font-size:14px;
  float: right;
  height: 100%;
  margin-right: .11rem;
  line-height: .5rem;
}
.bao{
    margin-left: .48rem;
   height:100%;
}
h3{
    float: left;
    height: 100%;
    line-height: .5rem;
    margin-left: 113px;
}
.box{
 width:100%;
 height:100%;
 min-height: 6.67rem;
background:#f3f4f8; 
}
.top{
    border:1px solid #dedede;
    width:100%;
    height:.5rem;
    background: #fff;
}

</style>
