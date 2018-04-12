<template>
  <div class="page-swipe">
    <mt-swipe >
      <mt-swipe-item class="slide1">
        <router-link to="/mine">
          <img src="../assets/logo.png"/>
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item class="slide2">
        <router-link to="/product">
          <img src="../assets/logo.png"/>
        </router-link>
      </mt-swipe-item>
      <mt-swipe-item class="slide3">
        <router-link to="/detailPage">
          <img src="../assets/logo.png"/>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .mint-swipe {
    width: 100%;
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .mint-swipe a {
    display: block;
    height: 200px;
  }
  .slide1 {
    /*background-color: #0089dc;*/
    color: #fff;
    position: relative;
  }
  .slide2 {
    /*background-color: #ffd705;*/
    color: #000;
    position: relative;
  }
  .slide3 {
    /*background-color: #ff2d4b;*/
    color: #fff;
    position: relative;
  }
  </style>
