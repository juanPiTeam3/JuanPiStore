<!--
 * @Author: 赵新朋
 * @Date: 2019-11-14 08:50:56
 * @LastEditors: 赵新朋
 * @LastEditTime: 2019-11-16 10:10:37
 * @Description: 
 -->
<template>
    <div class="addbarBox">
        <p>
            <span>联系人姓名</span>
            <input type="text" placeholder="您的姓名">
        </p>
        <p>
            <span>手机号码</span>
            <input type="text">
        </p>
        <p>
            <span>邮政编码</span>
            <input type="text" placeholder="可以不那么精确">
        </p>
        <p @touchstart="goselect">
            <span>所在地区</span>
            <span class="b">
            <b class="sheng">陕西省</b>
            <b class="shi">西安市</b>
            <b class="qu">雁塔区</b>
            </span>
            <i class="el-icon-arrow-right"></i>
        </p>
        <p>
            <span>详细地址</span>
            <input type="text" placeholder="请输入详细的地址" :maxlength=20>
        </p>
        <div class="autoaddress" v-show="isshow">
            <p class="select">选择地址<i class="el-icon-close" @touchstart="goselect"></i></p>
            <p class="autoselect" @click="chooseProvince">
                <b id="province">-选择-</b>
                <b id="city">-选择-</b>
                <b id="area">-选择-</b>
            </p>
            <ul class="autochoose">
                <li class="pro"></li>
                <li class="cit"></li>
                <li class="are"></li>
            </ul>
        </div>
        <div class="opcitBox" v-show="isshow"></div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"Addbar",
    data(){
        return{
            isshow:false,
            provinceList:[],
            provinceArray:[],//保存省
            cityList:[]
        }
    },
    methods:{
        goselect(){
            this.isshow=!this.isshow;
        },
        chooseProvince() {
            let that=this
            let autochoose = document.getElementsByClassName('autochoose')[0];
            let divPle=document.getElementsByClassName('pro')[0]
            let divCle=document.getElementsByClassName('cit')[0]
            let divAle=document.getElementsByClassName('are')[0]
            let sheng=document.getElementsByClassName('sheng')[0]
            let shi=document.getElementsByClassName('shi')[0]
            let qu=document.getElementsByClassName('qu')[0]
            // autochoose.innerHTML='';
            // let divPle=document.createElement("div");//创建一个div用于保存所有省份
            // divPle.style.cssText=`
            // width:.5rem;
            // float:left;
            // margin-left:.2rem;
            // overflow-y:auto;
            // padding-bottom:1rem;
            // `
            //循环所有省份添加进创建的div中
            // divCle.innerHTML='';
            // divAle.innerHTML='';
            for(var i=0;i<this.provinceArray.length;i++){
                let divEle=document.createElement('div')
                divEle.innerHTML=this.provinceArray[i]
                divPle.append(divEle);
                // divEle.className="provinceEle";
                divEle.style.cssText=`
                font-size:15px;
                text-align:center;
                `
                // autochoose.append(divPle);
                //当点击每一个省份时
                divEle.onclick = function(){
                    divCle.innerHTML='';
                    divAle.innerHTML='';
                for (var n = 0; n < that.provinceList.length; n++) {
                    // 循环所有数据拿到数据中的每一个省份
                var provice = that.provinceList[n];
                var provinceTag = document.getElementById("province");
                //查找所有数据中的省份列表==当前点击的省份
                provinceTag.innerHTML=this.innerHTML;
                if (provice.name == this.innerHTML) {
                //循环对应省份中的城市
                divCle.innerHTML='';
                that.cityList=[];
                for(var a=0;a<provice.cityList.length;a++){
                    //创建div把所有当前城市都放进去
                    let divYle=document.createElement("div")
                    let citylistName=provice.cityList[a].name
                    that.cityList.push(citylistName)
                    // console.log(that.cityList)
                    
                    for(let i=0;i<that.cityList.length;i++){
                        divYle.innerHTML=that.cityList[i]
                    }
                    divCle.append(divYle)
                    divYle.style.cssText=`
                    font-size:15px;
                    text-align:center;
                    `
                    autochoose.append(divCle);
                    //设置城市的点击事件
                    divYle.onclick=function(){
                        
                        for (var c= 0; c< that.provinceList.length; c++) {
                            var provice = that.provinceList[c];
                            var cityTag = document.getElementById("city");
                            cityTag.innerHTML=this.innerHTML;
                            
                            for(var b=0;b<provice.cityList.length;b++){
                                if(provice.cityList[b].name == this.innerHTML){
                                    // console.log(provice.cityList[b].areaList)
                                    divAle.innerHTML='';
                                    for(let e=0;e<provice.cityList[b].areaList.length;e++){
                                        let divEle=document.createElement("div")
                                        divEle.innerHTML=provice.cityList[b].areaList[e]
                                        divAle.append(divEle)
                                        divEle.style.cssText=`
                                        font-size:15px;
                                        text-align:center;
                                        `
                                        autochoose.append(divAle);
                                        //设置地区的点击事件
                                        divEle.onclick=function(){
                                        var areaTag = document.getElementById("area");
                                        areaTag.innerHTML=this.innerHTML;
                                        sheng.innerHTML=provinceTag.innerHTML;
                                        shi.innerHTML=cityTag.innerHTML;
                                        qu.innerHTML=areaTag.innerHTML;
                                        divCle.innerHTML='';
                                        divAle.innerHTML='';
                                        divPle.innerHTML='';
                                        that.isshow=!that.isshow;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    created(){
       axios("http://localhost:3000/address")
       .then(res=>{
           this.provinceList=res.data
           for (var i = 0; i < this.provinceList.length; i++) {
            var province = this.provinceList[i];
            var provinceName = province.name;
            this.provinceArray.push(provinceName);
            }
       })
       .catch(err=>{
           console.log(err)
       })
    var cityList;

    
    
   

    
}
    }
    
</script>
<style scoped>
.addbarBox{
    width: 100%;
    height: 100%;
    margin-top: .15rem;
    background-color: #fff;
}
p{
    width: 100%;
    height: .5rem;
}
span{
    float: left;
    width: 1rem;
    height: 100%;
    line-height: .5rem;
    font-size: 16px; 
    padding-left: 18px;   
}
.b{
    width: 2rem;
}

input{
    width: 2.4rem;
    border: none;
    outline: none;
    text-indent: 5px;
    font-size: 16px;
    float: left;
    height: 100%;
}
.el-icon-arrow-right{
    font-size: 18px;
    color: #999;
    float: right;
    padding-right: 16px;
    line-height: .5rem;
}
.autoaddress{
    width: 100%;
    height: 5.25rem;
    margin-top: 1.4rem;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background-color: #fff;
}
.autochoose{
    overflow-y: auto;
    height: 100%;
    margin-top: 6px;
}
.pro{
    width:.5rem;
    float:left;
    margin-left:.3rem;
    overflow-y:auto;
    padding-bottom:1rem;
}
.cit,.are{
    width:.7rem;
    float:left;
    /* padding-bottom:1rem; */
}
.select{
    width: 100%;
    height: .3rem;
    text-align: center;
    line-height: .3rem;
    font-size: 14px;
    padding:3px 0;
}

 b{
    font-size: 16px;
    font-weight: 400;
    width: .5rem;
    line-height: .3rem
}
.el-icon-close{
    float: right;
    font-size: 20px;
    line-height: .3rem;
    padding-right: 10px;
}
.opcitBox{
    width: 100%;
    position: fixed;
    top: 0;
    height: 100%;
    z-index: 88;
    opacity: .7;
    background-color: gray;
}
.autoselect{
    width: 100%;
    height: .3rem;
    margin-top: 3px;
    padding-left: 10px;
}
.autoselect b{
    width: .8rem;
    height: .3rem;
    overflow: hidden;
    white-space: nowrap;
    float: left;
    text-align: center;
    line-height: .3rem;
    margin-left: 10px;
}
.autoselect b:nth-child(1){
    width: .8rem;
}
</style>