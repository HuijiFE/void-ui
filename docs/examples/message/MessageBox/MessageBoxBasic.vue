<template>
  <vd-flexbox gutter="xsmall">
    <vd-button @click="openMsgBox">打开消息提示</vd-button>
  </vd-flexbox>
</template>

<script>
export default {
  methods: {
    openMsgBox() {
      this.$msg({
        title: '函数式组件',
        content: '之前创建的锚点标题组件是比较简单，没有管理或者监听任何传递给他的状态，也没有生命周期方法。它只是一个接收参数的函数。',
      });
    },
  },
};
</script>

<style>

</style>
