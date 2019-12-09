
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:58:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
    <div class="zhuti">
        <h2>欢迎注册</h2>
        <input  type="text" v-model="textphone" placeholder="请输入正确的手机号" @blur="textbox()" >
        <span>{{phree}}</span>
        <input type="text" v-model="textmima" placeholder="请输入密码" @blur="textbox2()" >
        <span>{{phree2}}</span>
        <input class="tijiao" type="button" value="注册" id="nextstep" @click="regainin()">
   </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import axios from 'axios';
export default {
  data () {
    return {
      textphone:'',
      phree:'',
      textmima:'',
      phree2:'',
      wtatol:[]
    }
  },
   methods:{
        textbox(){//手机号码的规则：十一位数字，开头是1。
        let reg = /^1\d{10}$/;
        if(!reg.test(this.textphone)||this.textphone==""){
            this.phree="亲请输入正确的手机号"
        }
      },
       textbox2(){
        let reg=/^\w{6,11}$/;
          if(!reg.test(this.textmima)||this.textmima==""){
          this.phree2="密码不能为空，6~13位数字或字母?"
          }
      },
      regainin(){
        console.log(this.wtatol);
          if(this.wtatol==""){
            axios({
                method:"post",
                url:"car",
                data:{
                 id:"",   
                name:this.textphone,
                userpass:this.textmima
                }
                })
            .then((res)=>{
                console.log(res.data)
                if(res.request.status==201){
                    Toast('注册成功');
                    this.$router.push({path:"/Dlogin"})
                }else{
                    Toast('注册失败');
                  }
                })
            .catch((err)=>{
                console.log(err);
            })
          }else{
            for(let i=0;i<this.wtatol.length;i++){
              if(this.wtatol[i].name==this.textphone){
                Toast('该用户已被注册，请重新输入');
              }else{
                 axios({
                method:"post",
                url:"car",
                data:{
                 id:"",   
                name:this.textphone,
                userpass:this.textmima
                }
                })
            .then((res)=>{
                console.log(res.data)
                if(res.request.status==201){
                    Toast('注册成功');
                    this.$router.push({path:"/Dlogin"})
                }else{
                    Toast('注册失败');
                  }
                })
            .catch((err)=>{
                console.log(err);
            })
              }
            }
          }
        }
     },
     created(){
      axios.get('car')
      .then((res)=>{
          this.wtatol=res.data;
          console.log(this.wtatol)
            })
            .catch((err)=>{
                console.log(err);
            })
        }
}
</script>
<style lang="scss" scoped type="text/css">
.regiset{
  width:100%;
  height:100%;
  background: white;
  .zhuti{
      width:95%;
      height:100%;
      margin-top:20px;
      text-align: center;
    p{
        font-size:16px;
        color:#666;
    }
    input{
        width:75%;
        height:1.5rem;
        margin-top:25px;
        border:1px solid black;
    }
    .tijiao{
        width:75%;
        height:1.5rem;
        background: red;
    }
    span{
      display: block;
      color:red;
      font-size:20px;
    }
    
  }
 
}


</style>
