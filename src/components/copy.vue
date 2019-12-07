<!--
 * @Description: 头部导航栏
 * @Author: 是丽丽呀
 * @Date: 2019-11-26 09:41:44
 * @LastEditors: 是丽丽呀
 * @LastEditTime: 2019-12-03 11:30:26
 -->
<template>
  <div id="app">
    <input v-model='search' />
    <ul v-for="item in searchData ">
    <li>{{item.name}},价格:￥{{item.price}}</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'LsearchHeader',
  data () {
    return {
        search: '',
products: [{
name: '苹果',
price: 25,
category: "水果"
}, {
name: '香蕉',
price: 15,
category: "水果"
}, {
name: '雪梨',
price: 65,
category: "水果"
}, {
name: '宝马',
price: 2500,
category: "汽车"
}, {
name: '奔驰',
price: 10025,
category: "汽车"
}, {
name: '柑橘',
price: 15,
category: "水果"
}, {
name: '奥迪',
price: 25,
category: "汽车"
}]
    }
  },
  computed: {
searchData: function() {
var search = this.search;

if (search) {
    return this.products.filter(function(product) {
    return Object.keys(product).some(function(key) {
    return String(product[key]).toLowerCase().indexOf(search) > -1
    })
    })
}

return this.products;
}
}
}
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #istop{
    width: 100%;
    height: .14rem;
    background-color: rgb(243, 242, 242);
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
    color: aliceblue;
  }
  #istop i{
    font-size: .06rem;
  }
  input{
    width: .65rem;
    height: .06rem;
    outline: none;
    border: none;
    margin-left: 40px;
  }
  #Search{
    border-radius: .05rem;
    /* width: .6rem; */
    padding: 2px;
    background-color: #fff;
    height: .06rem;
    position: relative;
   }
  #Search i{
    position: absolute;
    font-size: 14px;
    left: 10px;
    top: 8px;
    color: black;
  }
  p{
      color: black;
      font-size: 16px;
  }
  #bottom{
      margin-left: 15px;
  }
  #bottom h5{
      font-size: 22px;
      color: rgb(175, 170, 170);
  }
  #center{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: center;
      margin-top: 20px;  
  }
  #center li{
      margin-top: 20px;
      background-color: rgb(233, 233, 233);
      font-size: 18px;
      width: 100px;
      line-height: 30px;
      text-align: center;
  }

</style>
