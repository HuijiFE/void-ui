<template>
  <div class="vd-alert"
       :class="`alert-${currentTone}`">

    <span class="icon-outer"
          :class="label ? 'larger-alert': '' ">
      <span class="alert-icon">
        <i class="icon fa"
           :class="`fa-${currentIcon}`"></i>
      </span>
    </span>
    <div class="alert-content">
      <template v-if="label">
        <span class="alert-label">{{label}}</span>
        <br/>
      </template>

      <span class="alert-description">{{description}}</span>
    </div>

    <span class="alert-remove"
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
    this.$mount('#vd-alert');
    if (this.autoClose) {
      setTimeout(this.close, 3000);
    }
  }

  close() {
    document.body.removeChild(this.$el);
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

