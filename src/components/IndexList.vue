<template>
  <div>
    <mt-header fixed title="产品分类">
      <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  <!--  <mt-navbar v-model="selected">
      <mt-tab-item>产学投</mt-tab-item>
      <mt-tab-item>融资</mt-tab-item>
      <mt-tab-item>商城</mt-tab-item>
    </mt-navbar>-->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1"><i class="fontsize">产学投</i></mt-tab-item>
      <mt-tab-item id="2"><i class="fontsize">融资</i></mt-tab-item>
      <mt-tab-item id="3"><i class="fontsize">孵化</i></mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected" class="container">
      <mt-tab-container-item id="1">
        <mt-cell v-for="n in num1" :title="'内容 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in num2" :title="'测试 ' + n"/>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in num3" :title="'选项 ' + n"/>
      </mt-tab-container-item>
    </mt-tab-container>
   <!-- <mt-index-list>
      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="D">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="E">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="F">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="G">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="H">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="J">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="K">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
    </mt-index-list>-->

    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="../assets/100x100.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="../assets/100x100.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/100x100.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/100x100.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        num1: [1,2,3,4,5,6,7,8,9,10],
        num2: [1,2,3,4,5,6],
        num3: [1,2,3,4],
        selected: "1",
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .fontsize {
   font-size: 16px;
   font-style: normal;
  }
</style>
