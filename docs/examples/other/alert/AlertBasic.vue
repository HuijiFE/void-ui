<template>
  <div>
    <vd-button @click="onClick">点击</vd-button>
  </div>
</template>
<script lang="ts">
import VdAlert from 'src/controls/alert/VdAlert.vue';

import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AlertBasic extends Vue {
  onClick() {
    let alert = new VdAlert();
    alert.show({
      preset: 'success',
      label: '成功提示的标题',
      description: '成功提示的文案',
      autoClose: true,
    });
  }
}
</script>

