<!--
 * @Author: your name
 * @Date: 2019-12-03 22:42:51
 * @LastEditTime: 2019-12-04 11:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \reactd:\三阶段\vueWorkspace\juanpi\src\components\LgetAddress.vue
 -->
<template>
<div class="box">
<li>
    <div class="left">
        <span>所在地区</span>
    </div>
    <div class="right r">
        <div class="city" @click="toAddress">{{city}}</div>
        <i class="arrow-r"> </i>
    </div>
</li>
<div class="divwrap">
    <v-distpicker type="mobile" @selected='selected' v-show="addInp">
</v-distpicker>
</div>

<div class="mask" v-show="mask"></div>
</div>


</template>
<script>

import VDistpicker from 'v-distpicker'
export default {
    data(){
        return{
            city:'请选择',
            addInp :false,
            mask:false
        }
    },
    
     components: { VDistpicker },
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

      }


     }
}
</script>
<style scoped>

    .divwrap{
        height: 400px;
        overflow-y: auto;
        /* position: fixed;
        left: 0;
        bottom: 0; */
        width: 100%;
    }
    .divwrap>>>.distpicker-address-wrapper{
        color: #999;
    }
    .divwrap>>>.address-header{
        position: fixed;
        bottom: 400px;
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
</style>

 