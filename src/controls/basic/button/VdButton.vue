<template>
  <button class="vd-button"
          :class="classes">
    <i class="vd-button_icon"></i>
    <span class="vd-button_content"></span>
  </button>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Emit,
  Inject,
  Model,
  Provide,
  Watch,
} from 'vue-property-decorator';

@Component
export default class VdButton extends Vue {
  @Prop({ default: '' })
  theme: string;

  @Prop() tone: string;

  get classes(): any[] {
    return [
      `vdp-tone-${this.tone}`,
      {
        [`vdp-theme-${this.theme}`]: this.theme,
      },
    ];
  }
}
</script>