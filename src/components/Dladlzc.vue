
<!--
 * @Author: your name
 * @Date: 2019-11-06 19:26:33
 * @LastEditTime: 2019-12-09 10:57:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \day12d:\vuekong\myfule\src\components\Serich.vue
 -->
<template>
      <div class="box">
        <img :src="imgs" alt="" class="touxiang" @click="dian" id="imgId">
        <router-link to="./Dregiset">
            <p class="tizhuan">{{name}}</p>
        </router-link>
        <p>{{shushu}}</p>
        <router-link to="./Dregiset">
            <p class="tizhuan">{{zhuce}}</p>
        </router-link>
      </div>
</template>

<script>
export default {
  data () {
    return {
      name:"",
      zhuce:"",
      shushu:"",
      imgs:"static/imgs/001.jpg"
    }
  },
  created() {
        let cook=this.getCookie("name")
        if(cook!=""){
            console.log("sshi")
              let cook=this.getCookie("name")
               console.log("cook:"+cook)
            this.name=cook,
            this.zhuce=""
            this.imgs="static/imgs/002.jpg";

        }else{
             this.name="登陆",
             this.shushu="|"
             this.zhuce="注册"
              this.imgs="static/imgs/001.jpg";
        }
    },
   methods:{
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
dian(){
  this.captureImage()
},
captureImage(){
        var cmr = window.plus.camera.getCamera();//获取摄像头对象
        var res = cmr.supportedImageResolutions[2];//获取支持的分辨率，这里是第三个分辨率,直接使用supportenImageResolutions可以获取自己手机所支持的分辨率有多少种格式，返回值类型 string[]
        var fmt = cmr.supportedImageFormats[0];//JPG格式，
    
        cmr.captureImage( function( path ){//成功回调函数，获取路径
        alert( "拍照成功" );//把保存在app目录下的照片显示在img标签里
        window.plus.io.resolveLocalFileSystemURL(path, function(entry) {
            let pathPhoto = entry.toLocalURL();
            console.log(pathPhoto);
            document.getElementById("imgId").src=pathPhoto;
        }, function(e) {
            console.log("出错了！");
        });
        },
        function( error ) {
            alert( "Capture image failed: " + error.message );
        },
        {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
        )},

    }
}
</script>
<style lang="scss" scoped type="text/css">
.box{
    width:100%;
    height:4rem;
    background: #fc684e;
    color:white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .touxiang{
      display: block;
      width:3.5rem;
      height:3.5rem;
      border-radius: 50px;
    }
    .tizhuan{
      color:white;
      font-size:16px;
    }
}

</style>
