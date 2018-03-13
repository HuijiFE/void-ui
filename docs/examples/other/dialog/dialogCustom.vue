<template>
  <div>
    <vd-button @click="onClick">点击</vd-button>
  </div>
</template>
<script lang="ts">
import VdDialog from 'src/controls/dialog/VdDialog.vue';

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class DialogCustom extends Vue {
  onClick() {
    let dialog = new VdDialog();
    dialog.show({
      label: '标题',
      preset: '',
      description: '提示内容提示内容提示内容提示内容提示内容',
    });
  }
}
</script>
