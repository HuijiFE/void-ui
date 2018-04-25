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

/**
 * Control Button
 */
@Component
export default class VdButton extends Vue {
  @Prop({ default: '' })
  public theme: string;

  @Prop() public tone: string;

  get classes(): ClassName {
    return [
      `vdp-tone-${this.tone}`,
      {
        [`vdp-theme-${this.theme}`]: this.theme,
      },
    ];
  }
}
</script>