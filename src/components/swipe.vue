<template>
  <div class="swipe">
      <mt-swipe :auto="3000" @change="handleChange">
        <mt-swipe-item class="slide1"> <img src="./t1.jpg"/>1</mt-swipe-item>
        <mt-swipe-item class="slide2"> <img src="./t2.jpg"/>2</mt-swipe-item>
        <mt-swipe-item class="slide3"> <img src="./t3.jpg"/>3</mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
  import {Swipe, SwipeItem} from "mint-ui"
  export default {
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  /*mt-swipe 需要设置高度和位置*/
  .mint-swipe {
    width: 100%;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide1{
    /*background: #AA3333;*/
    width: 100%;
  }
  .slide2{
    /*background: aqua;*/
    width: 100%;
  }
  .slide3{
    width: 100%;
    /*background: blue;*/
  }
  img{
    width: 100%;
  }
</style>
