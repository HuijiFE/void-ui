<template>
  <div class="vd-note"
       :class="classes">
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
import {
  ControlTone,
  ControlTheme,
  VdStylableControl,
} from 'src/controls/base/VdControl';

@Component
export default class VdNote extends VdStylableControl {
  @Prop({ type: String })
  preset: string;

  @Prop({ type: String })
  icon: string;

  @Prop({ type: String })
  tone: ControlTone;

  @Prop({ type: String })
  label: string;

  @Prop({ type: String })
  theme: ControlTheme;

  @Prop({ type: String })
  description: string;

  get classes() {
    return [`theme-${this.theme || this.$void.theme}`];
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
