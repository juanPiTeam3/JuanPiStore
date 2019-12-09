
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:59:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
<div class="regiset">
    <div class="xiugai">
        <p @click="back()"> ＜ </p>
        <p>设置</p>
        <p></p>
    </div>
    <hr>
    <div class="centt first">
        <p>个人资料</p>
        <p> > </p>
    </div>
        <hr>
    <div class="centt">
        <p>修改密码</p>
        <router-link to="./Dxgmima">
        <p> > </p>
        </router-link>
    </div>
        <hr>
    <div class="centt">
        <p>账户安全</p>
        <p> > </p>
    </div>
        <hr>
    <div class="centt">
        <p>消息推送</p>
        <p>></p>
    </div>
        <hr>
    <div class="centt">
        <p>开抢提醒</p>
        <p> > </p>
    </div>
        <hr>
    <div class="centt">
        <p>清理缓存</p>
        <p> > </p>
    </div>
        <hr>
    <div class="centt">
        <p>省流量模式</p>
        <p> > </p>
    </div>
        <hr>
    <div class="centt">
        <p>wifi环境下自动升级客户端</p>
        <p> > </p>
    </div>
        <hr>    
    <div class="centt">
        <p>版本检测</p>
        <p> > </p>
    </div>
        <hr>
    <input type="button" @click="removeCookie" value="退出当前登陆">
</div>
</template>

<script>
export default {
  data () {
    return {
        value: true
    }
  },
  updated(){
    let cook=this.getCookie("name")
         if(cook=""){
             setTimeout(()=>{
						let str = "/Dmyp";
						this.$router.push({path:str});
					});
        }
  },
  methods:{
      removeCookie(key){
        let str="name"+"="+""
         document.cookie = str;
    },
      getCookie(key){  
         var str = unescape(document.cookie);
         let arr = str.split("; "); 
         for(var i in arr){
         if(arr[i].startsWith(key+"=")){
         let [,value]=arr[i].split("=");
         return value;
        }
    }
    return null;
    },
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
    color:black;
    font-size: 20px;
    
    .xiugai{
        width:95%;
        margin:5px 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
    }
    .centt{
        width:95%;
        height:2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top:20px;
    }
     input{
            width:50%;
            height:1.5rem;
            margin-left: 25%;
            margin-top:40px;
        }
}
</style>