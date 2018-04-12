<template>
  <div class="hello">
    <!--搜索组件-->
    <div class="d1">
      <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
    </div>
    <br>
    <br>
      <mt-button @click="hanleclick" class="h">Toast-button</mt-button>
    <!--<div class="iconfont icon-bussinessman"></div>-->
    <!--<ul-->
      <!--v-infinite-scroll="loadMore"下拉加载更多-->
      <!--infinite-scroll-disabled="loading"-->
      <!--infinite-scroll-distance="10">-->
      <!--<li v-for="item in list">{{ item }}</li>-->
    <!--</ul>-->
    <br>
    <br>
    <router-link to="/Popup">
      <mt-button type="danger" icon="more">
        去Popup页面
      </mt-button>
    </router-link>
    <br>
    <br>
    <router-link to="/Swipe">
      <mt-button type="primary" plain>
        去Swipe页面
      </mt-button>
    </router-link>
    <br>
    <br>
    <router-link to="/Swipe">
      <mt-button type="danger">
        去Swipe页面
      </mt-button>
    </router-link>
    <br>
    <br>
    <router-link to="/LazyLoad">
      <mt-button type="primary">
        去Lazy_load页面
      </mt-button>
    </router-link>
    <br>
    <br>
    <router-link to="/Index">
      <mt-button type="default">去IndexList页面</mt-button>
    </router-link>
    <br>
    <br>
    <router-link to="/">
      <mt-button type="danger" disabled>
        禁止按钮
      </mt-button>
    </router-link>
  <br>
  <br>
    <mt-badge size="small" type="error">30</mt-badge>
    <mt-badge size="normal" type="success">10</mt-badge>
    <mt-badge size="large">10</mt-badge>
    <mt-badge size="large" type="warning">10</mt-badge>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible"
      :cancelText = "cancelText"
      >
    </mt-actionsheet>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  import { InfiniteScroll } from 'mint-ui';//无限滚动指令。向下滑动加载
  import { MessageBox } from 'mint-ui';//弹出提示框的多种交互
  import {Actionsheet} from 'mint-ui'//操作表  从屏幕下方移入
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App',
      list: [1,2,3,4,5,6,7,8,9,10,11,12,3,3,3,3,4,5,6,7,8],
      value : '',
      sheetVisible : false,
      cancelText : '',
      actions:[
        {
          name: "摄影",
          method: this.getphoto
        }
      ],
      value: ""
    }
  },
  methods: {
    hanleclick : function () {
      //弹出提示1
      // this.$toast("asdasd");在入口文件引入设置即可
      //Toast("jason-tip"); 需要在当前vue文件单独import {Toast} from "mint-ui";
      /*Toast({  //对象配置的形式  Toast({.......配置信息})
        message : "操作成功！！",
        position :  "bottom", //默认在middle位置
        duration : 2000,
        iconClass: 'iconfont icon-bussinessman'
      })*/
     /* Toast({
        message: "成功！！！",
        iconClass: 'iconfont icon-bussinessman'
      })*/


      //弹出提示2 提示框
      // Indicator.open('加载中。。。。。'); 方法的形式
    /* Indicator.open({
        text : '加载中.....',
        spinnerType : 'fading-circle'
      });*/
     /*
     * 参数 text  ： 文本内容  type ： string
     * spnnerType : 加载图标的类型  type : strin  可选值 : 'snake''fading-circle''double-bounce''triple-bounce' 默认值：snake
     * */
    /* setTimeout(() => {
       Indicator.close();
     },1000)*/

    //出式提示框，有多种交互形式
    //   MessageBox('Tip','DO It!');
    //对象的形式
    //   MessageBox({
    //     title : '提示',
    //     message : '确定此操作吗？',
    //     showCancelButton : true
    //   })

      //alert 弹出方法
      // MessageBox.alert('操作成功！！！').then(action => {
      //   console.log("操作成功!!");
      // })

      //comfirm 方法
     /* MessageBox("提示","sure done?").then(action => {
        console.log("sure done it!!!");
      })*/

     //prompt范式
      /*MessageBox.prompt('请输入姓名').then(({ value, action }) => {
        console.log("你的名字"+this.value)
      });*/

      //操作表，从屏幕下方移入。
      this.sheetVisible = true;

    },
    loadMore() {
      this.loading = true;
      setTimeout(() => {
        let last = this.list[this.list.length - 1];
        for (let i = 1; i <= 10; i++) {
          this.list.push(last + i);
        }
        this.loading = false;
      }, 2500);
    },
    getphoto: function () {
      console.log("拍照");
    }
  }
}
</script>
<style>
  @import "../assets/iconfont.css";
  .hello{
    z-index: 222;
  }
  .d1{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
  }
</style>
