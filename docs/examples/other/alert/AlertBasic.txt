<template>
  <div>
    <vd-button @click="onClick"
               :disabled="bOk">点击</vd-button>
  </div>
</template>
<script lang="ts">
import VdAlert from 'src/controls/alert/VdAlert.vue';

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AlertBasic extends Vue {
  bOk = false;
  onClick() {
    let alert = new VdAlert();
    this.bOk = !this.bOk;
    if (this.bOk) {
      alert.show({
        preset: 'success',
        label: '成功提示的标题',
        description: '成功提示的文案',
        autoClose: true,
      });
      setTimeout(() => {
        this.bOk = false;
      }, 3000);
    }
  }
}
</script>

