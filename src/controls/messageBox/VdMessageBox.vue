<template>
  <div class="vd-message-box-modal">
    <div class="vd-message-box">
      <div class="vd-message-title">{{title}}</div>
      <div class="vd-message-content">{{content}}</div>
      <div class="vd-message-btns">
        取消按钮
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Vue,
  Watch,
} from 'vue-property-decorator';
// import vdButton from '../button/VdBotton.vue'

@Component
export default class vdMessageBox extends Vue {
  title = '';
  content = '';
}
</script>

<style>

</style>
