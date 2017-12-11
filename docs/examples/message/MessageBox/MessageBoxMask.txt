<template>
  <vd-flexbox gutter="xsmall">
    <vd-button skin="plain"
               @click="openMsgBox">禁止点击遮罩层关闭</vd-button>
  </vd-flexbox>
</template>

<script>
export default {
  methods: {
    openMsgBox() {
      this.$msg({
        title: '这是一个标题',
        content: '不能通过点击遮罩层来取消',
        maskCloable: false,
      })
        .then(() => {
          // 点击了确定
        })
        .catch(error => {
          if (error === 'cancel') {
            // 点击了取消
            console.log('取消');
          }
        });
    },
  },
};
</script>
