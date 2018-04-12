<template>
  <div class="hello">
    <h1 class="page-title">Action Sheet</h1>
    <div class="page-actionsheet-wrapper">
      <button class="mint-button mint-button--default mint-button--large" @click="actionSheet">
        <label class="mint-button-text">点击上拉 action sheet</label>
      </button>
    </div>
    <mt-actionsheet
      :actions= "data"
      v-model="sheetVisible"
      cancelText="cancelText"
    >
    </mt-actionsheet>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          sheetVisible: false,
          cancelText: "", //设置cancelText = "" 空字符串 取消从下面弹出的面板 取消按钮（每个按钮有回调函数）
          data:[
            {
              name: "摄影",
              method: this.getphoto
            }
          ]
        }
      },
    methods: {
      actionSheet: function () {
        this.sheetVisible = true;
      },
      getphoto: function () {
        console.log("打开照相机")
      }
    }
  }
</script>

<style scoped>

</style>
