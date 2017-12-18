<template>
  <div class="vd-note"
       :class="stylableClasses">
    <span v-if="currentIcon"
          class="note-outer"
          :class="`tone-${currentTone}`">
      <i class="icon fa"
         :class="`fa-${currentIcon}`"></i>
    </span>
    <span class="note-content"
          :class="`tone-${currentTone}`">
      <span class="note-label">{{label}}</span>
      </br>
      <span calss="note-descrip">{{description}}</span>
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
import { ControlTone, ControlGenre } from 'typings';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdNote extends VdStylableControl {
  @Prop() preset: string;

  @Prop() icon: string;

  @Prop() tone: ControlTone;

  @Prop() label: string;

  @Prop() genre: ControlGenre;

  @Prop() description: string;

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

