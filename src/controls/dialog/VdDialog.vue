<template>
    <div class="vd-dialog"
         :class="classes">
      <span class="vd-dialog_label">{{label}}</span>
      <div class="vd-dialog_content">

         <span class="vd-dialog_content-message">
           <template v-if="currentIcon">
             <span class="vd-dialog_icon-outer"
                   :class="`vd-dialog_tone-${currentTone}`">
                  <i class="icon fa"
                    :class="`fa-${currentIcon}`">
                  </i>
              </span>
           </template>
           <span class="vd-dialog_description">{{description}}</span>
         </span>

      </div>
      <div class="vd-dialog_judge">
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

export interface Param {
  label?: string;
  preset: string;
  description: string;
}

@Component
export default class VdDialog extends VdStylableControl {
  label?: string;

  preset: string;

  icon: string;

  tone: ControlTone;

  description: string;

  async show(options: Param) {
    this.label = options.label;
    this.preset = options.preset;
    this.description = options.description;

    let el = document.createElement('div');
    el.id = 'vd-dialog';
    document.body.appendChild(el);
    anime({
      targets: this.$el,
      opacity: 1,
      easing,
      duration,
      complete: () => {
        this.$mount('#vd-dialog');
      },
    });
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

  get classes() {
    return `theme-${this.theme || this.$void.theme}`;
  }

  get currentIcon(): string {
    switch (this.preset) {
      case 'success':
        return 'check';
      case 'primary':
        return 'info';
      case 'warning':
        return 'exclamation';
      case 'error':
        return 'times';
      default:
        return this.icon;
    }
  }

  get currentTone(): string {
    switch (this.preset) {
      case 'success':
        return 'success';
      case 'primary':
        return 'primary';
      case 'warning':
        return 'warning';
      case 'error':
        return 'danger';
      default:
        return this.tone;
    }
  }
}
</script>
