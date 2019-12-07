<!--
 * @Description: 
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 16:19:30
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-05 19:53:39
 -->
  <!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-11-26 16:15:50
 -->
<template>

    <div class="box">
        <ul>
            <li v-for="(item,index) in goods" :key="index">
                <img :src="item.img" alt="">
                <div id="wenzi">
                    <h5>{{item.decoration}}</h5>
                    <span>￥{{item.price}}</span>
                    <p>{{item.hightprice}}</p>
                    <div>{{item.discount}}</div>
                </div>
                <div id="shop">
                    <p>{{item.commit}}条好评</p>
                    <span>销量:{{item.count}}</span>
                </div> 
            </li>

        </ul>
    </div>
 
</template>

<script>

const  axios  =  require("axios");
export default {
  name: 'Lshopgoodlist',
  props:["Isshopname"],
  data () {
    return {
      goods:[],
      types:this.$store.state.sale,
      type:this.$store.state.type
    }
  },
  created(){
            axios('http://localhost:3000/shopname/')
            .then((res)=>{
                let datas=res.data; 
                let arr=[];
                for(let i in datas){
                    if(datas[i].isshopname==this.Isshopname){
                        arr.push(datas[i])
                    }
                }
                this.goods=arr;
            })
            .catch((err)=>{
                console.log('服务器端出错了'+err)
            })

      if(this.type=='居家'){
            this.goods=[];
            axios('http://localhost:3000/goodlilstJujia/')
            .then((res)=>{
                this.goods=res.data; 
            })
            .catch((err)=>{
                console.log('服务器端出错了'+err)
            })
            
      }  
    this.goods=[];
  },
  beforemount(){     
  },

  methods:{
  
        // 按销量排序
        getSale(data){
          data.sort(function (obj1,obj2) {
              return obj2.count-obj1.count;
          });
          let arr=data;
          return arr;
      },
       // 按价格上升排序  
        getUpMoney(data){
          data.sort(function (obj1,obj2) {
              return obj1.price-obj2.price;
          });
          let arr=data;
          return arr;
      }

        
  },
  mounted(){
    //   console.log(this.types)
  },
computed: {
    listData() {
      return this.$store.state.num;
    }
  },
watch: {
   listData() {
      //监听nav是不是点击了
        if(this.$store.state.sale=='销量'){
            this.$options.methods.getSale(this.goods);
        }
        if(this.$store.state.sale=='价格'){
            this.$options.methods.getUpMoney(this.goods);
        }
        if(this.$store.state.sale=='推荐'){
            // this.$options.methods.getShopsByType(this.goods);
             axios('http://localhost:3000/shopname/')
            .then((res)=>{
                let datas=res.data; 
                //   this.goods = this.getShopsByType(this.allBooks);//内部数据，由于渲染到了页面，所以，触发了组件更新
                let arr=[];
                for(let i in datas){
                    if(datas[i].isshopname==this.Isshopname){
                        arr.push(datas[i])
                    }
                }
                //   console.log(arr)
                this.goods=arr;
            })
            .catch((err)=>{
                console.log('服务器端出错了'+err)
            })
            
        }
    }
  },

 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
    font-size: 20px;
}
    ul{
        width: 100%;
        margin-bottom: 68px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    li{
        width: 49.5%;
        background-color: #fff;
        margin-bottom: 10px;
    }
    img{
        display: block;
        width: 100%;
        height: 100%;
    }
    #wenzi{
        width: 100%;
        float: left;
    }
    #wenzi span{
        color: #ff464e;
        font-size: 18px;
        display: block;
        float: left;
    }
    #wenzi p{
        font-size: 13px;
        color: #bbbbbb;
        float: left;
        margin-left: 7px;
        margin-top: 3px;
        text-decoration: line-through;
    }
    #wenzi h5{
        font-size: 17px;
        text-overflow: ellipsis;
        font-weight: 500;
        overflow: hidden;
        white-space: nowrap;
        line-height: 40px;
    }
    #wenzi div{
        /* border: 1px solid #ff464e; */
        /* width:100px; */
        height: 20px;
        color: black;
        float: right;
        font-size: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    #shop{
        height: 40px;
        line-height: 40px;
        float: left;
        background-color: #fff;
        border-top: 1px dashed rgb(179, 172, 172);
    }
    #shop p{
        font-size: 18px;
        color: #bbbbbb;
        float: left;
    }
    #shop span{
        float: right;
        font-size: 17px;
        font-weight: 500;
        color: #bbbbbb;
        display: block;
        margin-left: 30px ;
    }
</style>
