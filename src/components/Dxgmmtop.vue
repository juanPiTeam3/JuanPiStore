
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 08:37:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
    <div class="header">
      <p  @click="back()">＜</p>
      <p>{{regiset}}</p>
    </div>
    <hr>
    <div class="shuru">
        <input type="text" id="username"  v-model="textphone" placeholder="请输入需要修改的用户名"  @blur="textbox()">
        <span>{{phree}}</span>
        <input type="password" id="password01" v-model="textmima" placeholder="请输入旧密码" @blur="textbox2()">
        <span>{{phree2}}</span>
        <input type="password" id="password02" v-model="textxiugai" placeholder="请输入新的密码">
        <span>{{phree3}}</span>
        <input @click="CheakBut" type="submit" value="确认修改">
    </div>
</div>
</template>



<script>
import { Toast } from 'mint-ui';
import axios from "axios";
export default {
  data () {
    return {
      username: "",
      regiset:'修改密码',
      textphone:'',
      phree:'',
      textmima:'',
      phree2:'',
      phree3:'',
      textxiugai:'',
      ms01:"1",
      ms02:"",
      tmsg:"",
      tsd:[],
      wtatol:[]

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
      CheakBut(){
        for(let i in this.wtatol){
                if(this.wtatol[i].name == this.textphone && this.wtatol[i].userpass == this.textmima){
                    console.log(this.wtatol[i].id)
                    axios.patch('car/'+this.wtatol[i].id,{
                        userpass:this.textxiugai,
                    })
                    .then((res)=>{
                        Toast('修改成功!');
                        setTimeout(()=>{
                        this.$router.push('/Dlogin/')
                        },1000);
                    })
                    .catch((err)=>{
                        console.log(err);
                    })
                    return
                }else{
                     Toast('您输入的用户名或密码不正确啊!');
                }
            }
      },
      //二次判重
      //  textbox3: function() {
      //   var pass02 = document.getElementById('password02').value;
      //   var pass01 = document.getElementById('password01').value;
      //   if(pass01==pass02) {
      //       this.phree3= "密码正确";
      //       this.ms02="1"
            
      //       console.log(pass02+"555");
      //   }else{
      //       console.log(pass01+"pass01");
      //       console.log(pass02);
      //       this.phree3= "两次输入密码不一样请重新输入";
      //       this.ms02="1"
      //       } 
      //   }

      back(){
          this.$router.go(-1);
      }
  }
}
</script>
<style lang="scss" scoped type="text/css">
.regiset{
  width:100%;
  height:100%;
  background: white;
}
.header{
  width:95%;
  height:3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 10px;
  font-size:20px;
}
.shuru{
    width:100%;
    height:4rem;
    // background: red;
    input{
    display:block;
    width:80%;
    height:2rem;
    margin:30px auto;
    font-size:20px;
    }
span{
    display:block;
    width:80%;
    margin-left: 10%;
    color:red;
    font-size:20px;
}
}
</style>
