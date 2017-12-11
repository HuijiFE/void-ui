<template>
  <transition name="vd-message-box-fade">
    <div class="vd-message-box"
         :class="classes">
      <div class="modal-mask"
           @click.self="maskClick">
        <div class="message-box">
          <div class="header">{{title}}</div>
          <div class="body">{{content}}</div>
          <div class="footer">
            <div class="buttons">
              <vd-button class="cancel-button"
                         skin="silk"
                         @click.native="cancelFn">取消</vd-button>
              <vd-button skin="fill"
                         @click.native="confirmFn">确定</vd-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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

@Component
export default class VdMessageBox extends VdStylableControl {
  title = '';
  content = '';
  maskCloable = true;

  get classes() {
    return [this.genre ? `genre-${this.genre}` : `genre-${this.$void.genre}`];
  }

  maskClick() {
    if (this.maskCloable) {
      this.cancelFn();
    }
  }

  cancelFn() {
    this.$emit('cancel', this.$el);
  }

  confirmFn() {
    this.$emit('confirm', this.$el);
  }
}
</script>
