<template>
    <div class="vd-dialog-input vd-dialog"
         :class="classes">
      <span class="vd-dialog-input_label vd-dialog_label">{{label}}</span>

      <div class="vd-dialog-input_content">
          <span class="vd-dialog-input_content-label">{{contentLabel}}</span>
          <br/>
          <input class="vd-dialog-input_content-input"
                 type="text" placeholder="请输入文字"/>
          <br/>
          <span class="vd-dialog-input_content-description">
            {{contentDescription}}
          </span>
      </div>

      <div class="vd-dialog-input_judge vd-dialog_judge">
        <button @click="onCancel"
                class="vd-dialog_judge-common vd-dialog_cancel">取消</button>
        <button @click="onConfirm"
                class="vd-dialog_judge-common vd-dialog_confirm">确定</button>
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

import {
  VdStylableControl,
  ControlTone,
  ControlTheme,
} from 'src/controls/base/VdControl';

import anime from 'animejs';

const easing = 'easeInOutQuad';
const duration = 255;

export interface Params {
  label: string;
  contentLabel: string;
  contentDescription: string;
}

@Component
export default class VdDialogInput extends VdStylableControl {
  label: string;

  contentLabel: string;

  contentDescription: string;

  icon: string;

  tone: ControlTone;

  async show(options: Params) {
    this.label = options.label;
    this.contentLabel = options.contentLabel;
    this.contentDescription = options.contentDescription;

    let el = document.createElement('div');
    el.id = 'vd-dialog-input';
    document.body.appendChild(el);
    this.$mount('#vd-dialog-input');
  }

  get classes() {
    return `theme-${this.theme || this.$void.theme}`;
  }

  onConfirm() {
    this.close();
  }

  onCancel() {
    this.close();
  }

  close() {
    anime({
      targets: this.$el,
      opacity: 0,
      easing,
      duration,
      complete: () => {
        document.body.removeChild(this.$el);
      },
    });
  }
}
</script>
