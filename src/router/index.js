import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Popup from "@/components/Popup"
import Swipe from "@/components/swipe"
import TestDemo from "@/components/test_demo"
import LazyLoad from "@/components/lazy_load"
import Index from "@/components/IndexList"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: "/Popup",
      name: "Popup",
      component: Popup
    },
    {
      path: "/Swipe",
      name: "Swipe",
      component: Swipe
    },
    {
      path: "/TestDemo",
      name: "TestDemo",
      component: TestDemo
    },
    {
      path: "/LazyLoad",
      name: "LazyLoad",
      component: LazyLoad
    },
    {
      path: "/Index",
      name: "Index",
      component: Index
    }
  ]
})
