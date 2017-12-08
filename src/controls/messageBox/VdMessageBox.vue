<template>
  <div class="vd-message-box"
       :class="classes">
    <div class="modal-mask"
         @click="maskClick"></div>
    <div class="message-box">
      <div class="header">{{title}}</div>
      <div class="body">{{content}}</div>
      <div class="footer">
        <div class="btns">
          <vd-button @click.native="cancelFn">取消</vd-button>
          <vd-button @click.native="confirmFn">确定</vd-button>
        </div>
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

import { VdStylableControl } from 'src/controls/base/VdControl';
// import VdButton from 'src/controls/button/VdButton.vue';

@Component
export default class VdMessageBox extends VdStylableControl {
  // title = '';
  // content = '';

  @Prop() title: string;
  @Prop() content: string;

  get classes() {
    return [this.genre ? `genre-${this.genre}` : `genre-${this.$void.genre}`];
  }

  @Prop({ default: true })
  maskCloable: boolean;

  maskClick() {
    if (this.maskCloable) {
      this.cancelFn();
    }
  }

  // @Emit('close');
  cancelFn() {
    this.$emit('cancel', this.$el);
    console.log('点击了取消');
  }

  confirmFn() {
    this.$emit('confirm', this.$el);
    console.log('点击了确定');
  }
}
</script>

<style>

</style>
