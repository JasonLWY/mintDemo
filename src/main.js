import Vue from 'vue'
import App from './App'
import router from './router'
/*映入mint-ui*/
import MintUI from 'mint-ui'
/*引入css*/
import 'mint-ui/lib/style.css'
Vue.config.productionTip = false;
Vue.use(MintUI);

/* eslint-disable no-new */
/*babel-plugin-component 可以引入自己need 的组件 按需加载 减少体积*/
/*
    按需加载自己需要的{button} {Cell}两个组件
    Vue.use(Button);
    Vue.use(Cell)
*/
import {Lazyload} from "mint-ui"
// import img from './t1.jpg'
//定制化
Vue.use(Lazyload, {
  preLoad: 1.3,
  error: './assets/logo.png',
  loading: './assets/logo.png',
  attempt: 1
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
