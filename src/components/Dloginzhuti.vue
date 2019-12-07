
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-02 15:22:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
   <div class="dltop">
       <p>卷皮账号登陆</p>
       <p>手机快捷登陆</p>
   </div>
   <input class="shuru" type="text" placeholder="请输入用户名" v-model="name" @blur="check1()">
   <span id="reg1">{{reg1}}</span>
   <input class="shuru" type="password" placeholder="请输入密码"  v-model="password" @blur="check2()">
   <span id="reg2">{{reg2}}</span>
    <input class="denglu" type="submit" value="登陆" id="consub" @click="checklogin()">
    <div class="xiugai">
        <p>修改密码</p>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
         name:"",
         password:"",
         reg1:"",
         reg2:"",
         information:[]
    }
  },
   methods:{
          check1(){
            // 用户名的规则：只能使用数字字母下划线，且数字不能开头，长度在6-15之间
                let reg= /^1\d{10}$/;
                if(!reg.test(this.name)||this.name==null){
                    this.reg1="   不能为空，请输入正确的手机号?"
                }
          },
          check2(){
                let reg=/^\w{6,11}$/;
                if(!reg.test(this.password)||this.password==""){
                    this.reg2="   密码不能为空，6~13位数字或字母?"
            }
        },
        checklogin(){
        fetch('http://localhost:3000/car?name='+this.name)//jsonsever
      .then(res=>{
        return res.json();
      })
      .then(data=>{
          console.log(data)
          let pass=data[0].userpass
          let name=data[0].name
          console.log(pass)
          if(this.password==pass){
              console.log("成功")
              window.localStorage.setItem('name', name);
              console.log(name)
              let str="name"+"="+name
              document.cookie = str;
              setTimeout(()=>{
						let str = "/Dmyp";
						this.$router.push({path:str});
					},1100);
          }else{
              console.log("失败")
          }
     })
                .catch(err=>{
                console.log(err);
                })  
            }
        }
    }
</script>
<style lang="scss" scoped="" type="text/css">
.regiset{
    width:100%;
    height:100%;
}
.dltop{
    display: flex;
    justify-content: space-around;
    align-items: center;
    p{
        font-size:20px;
        color:#666;
        margin-top:10px;
    }
}
.shuru{
    display: block;
    width:80%;
    height:.4rem;
    margin:20px auto;
    font-size:16px;
    outline: none;
    border:0;
    border-bottom:1px solid #666;
}
.denglu{
    width:80%;
    height:.4rem;
    background:orangered;
    color:white;
    font-size:20px;
    margin-top:10px;
    margin-left:10%;

}
.xiugai{
    font-size:16px;
    color:#666;
    margin-left:75%;
    margin-top:10px;
}
span{
    color: red;
    font-size:16px;
    margin-left:10%;
    display: block;
}

</style>
