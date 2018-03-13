<template>
  <div>
    <vd-button @click="onClick">点击</vd-button>
  </div>
</template>
<script lang="ts">
import VdDialogInput from 'src/controls/dialog/VdDialogInput.vue';

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DialogInputBasic extends Vue {
  onClick() {
    let dialogInput = new VdDialogInput();
    dialogInput.show({
      label: '标题',
      contentLabel: '小标题',
      contentDescription: '说明文字说明文字说明文字说明文字',
    });
  }
}
</script>
