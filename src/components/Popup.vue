<template>
  <div>
    <!--弹出框，可自定义内容。-->
    <mt-button @click="handleclick">刷新内存</mt-button>
    <mt-popup class="ss" v-model="popupVisible" position="bottom" popup-transition="popup-fade" modal="modal">
      <slot><p>刷新成功!</p></slot>
    </mt-popup>
  </div>
</template>

<script>
  import {Popup} from "mint-ui"
  export default {
    data() {
      return {
        popupVisible: false,
        modal: false
      }
    },
    methods: {
      handleclick: function () {
        this.popupVisible = true;
        this.modal = true
       /* setTimeout(() => {
          this.popupVisible = false
        },1000)*/
      }
    }
  }
</script>
<style scoped>
  .ss {
    width: 100%;
    height: auto;
    background: #b2d7f7;
  }
</style>
