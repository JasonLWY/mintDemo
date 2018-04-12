<template>
  <div>
    <mt-header fixed title="mint-ui懒加载">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <!--<mt-button @click="handleClose">关闭</mt-button>-->
      </router-link>
    </mt-header>
    <ul>
      <li v-for="item in list">
        <img v-lazy="item"  alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  // import img from '../../static/logo.png'
  export default {
    data() {
      return {
        list: ["../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png","../../static/invite-polite3.png"]
      }
    },
    methods: {
      handleClose: function () {
        //设置返回之前的路由
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  img[lazy=loading] {
    width: 200px;
    height: 200px;
    background: url("../assets/5-121204193R0-50.gif") no-repeat;
    margin: auto;
  }
  img{
    display: block;
    width: 200px;
    height: 200px;
  }
  ul li {
    list-style: none;
    margin: 10px 20px;
  }
</style>
