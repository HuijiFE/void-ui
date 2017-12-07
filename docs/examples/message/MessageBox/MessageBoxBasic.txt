<template>
  <div @click="openMsgBox">打开提示框</div>
</template>

<script>
export default {
  methods: {
    openMsgBox() {
      this.$msg({
        title: '这是标题',
        content: '这是内容',
      });
    },
  },
};
</script>

<style>

</style>
