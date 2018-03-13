<template>
  <div class="vd-alert"
       :class="`vd-alert_${currentTone}`">

    <span class="vd-alert_icon-outer"
          :class="label ? 'vd-alert_larger-alert': '' ">
        <i class="icon fa"
           :class="`fa-${currentIcon}`"></i>
    </span>

    <div class="vd-alert_alert-content">
      <template v-if="label">
        <span class="vd-alert_alert-label">{{label}}</span>
        <br/>
      </template>
      <span class="vd-alert_alert-description">{{description}}</span>
    </div>

    <span class="vd-alert_alert-remove"
          @click="close">
      <i class="icon fa fa-remove"></i>
    </span>

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

import { VdStylableControl, ControlTone } from 'src/controls/base/VdControl';
import anime from 'animejs';
const easing = 'easeInOutQuad';
const duration = 500;

export interface Params {
  label?: string;
  preset: string;
  description: string;
  autoClose: boolean;
}
@Component
export default class VdAlert extends VdStylableControl {
  label?: string;
  preset: string;
  description: string;
  autoClose: boolean;

  async show(options: Params) {
    this.label = options.label;
    this.preset = options.preset;
    this.description = options.description;
    this.autoClose = options.autoClose;

    let el = document.createElement('div');
    el.id = 'vd-alert';
    document.body.appendChild(el);
    anime({
      targets: this.$el,
      opacity: 1,
      easing,
      duration,
      complete: () => {
        this.$mount('#vd-alert');
      },
    });
    if (this.autoClose) {
      setTimeout(this.close, 3000);
    }
  }

  close() {
    anime({
      targets: this.$el,
      tanslateY: '-3rem',
      easing,
      duration,
      complete: () => {
        document.body.removeChild(this.$el);
      },
    });
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
        return '';
    }
  }

  get currentTone(): ControlTone {
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
