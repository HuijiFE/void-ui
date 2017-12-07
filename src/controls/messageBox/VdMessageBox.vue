<template>
  <div class="vd-message-box">
    <div class="modal-mask"
         @click="maskClick"></div>
    <div class="body">
      <div class="title">{{title}}</div>
      <div class="content">{{content}}</div>
      <div class="btns">
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
export default class VdMessageBox extends Vue {
  title = '';
  content = '';

  @Prop({ default: true })
  maskCloable: boolean;

  maskClick() {
    if (this.maskCloable) {
      this.close();
    }
  }

  close() {
    console.log('messagebox已关闭');
  }
}
</script>

<style>

</style>
