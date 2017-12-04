<template>
  <a v-if="href"
     class="vd-button"
     :class="classes"
     :href="href"
     :target="target"
     :ref="target === '_blank' ? 'noopener noreferrer' : ''"
     :disabled="disabled"
     @click="onClick">
    <i v-if="icon && iconPosition === 'left'"
       class="icon fa"
       :class="`fa-${icon}`"></i>
    <span v-if="$slots.default"
          class="content">
      <slot></slot>
    </span>
    <i v-if="icon && iconPosition === 'right'"
       class="icon fa"
       :class="`fa-${icon}`"></i>
  </a>

  <router-link v-else-if="to"
               class="vd-button"
               :class="classes">
    <i v-if="icon && iconPosition === 'left'"
       class="icon fa"
       :class="`fa-${icon}`"></i>
    <span v-if="$slots.default"
          class="content">
      <slot></slot>
    </span>
    <i v-if="icon && iconPosition === 'right'"
       class="icon fa"
       :class="`fa-${icon}`"></i>
  </router-link>

  <button v-else
          class="vd-button"
          :class="classes"
          :type="type"
          :disabled="disabled"
          @click="onClick">
    <i v-if="icon && iconPosition === 'left'"
       class="icon fa"
       :class="`fa-${icon}`"></i>
    <span v-if="$slots.default"
          class="content">
      <slot></slot>
    </span>
    <i v-if="icon && iconPosition === 'right'"
       class="icon fa"
       :class="`fa-${icon}`"></i>
  </button>
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
import { VdStylableControl, VdLoadingControl } from 'src/controls/base/VdControl';

@Component
export default class VdButton extends VdStylableControl implements VdLoadingControl {
  @Prop({ default: 'button' })
  type: string;

  @Prop() href: string;

  @Prop({ default: '_blank' })
  target: string;

  @Prop() to: string | Location;

  @Prop() loading: boolean;

  @Prop() plain: boolean;

  @Prop() wide: boolean;

  @Prop() icon: string;

  @Prop({ default: 'left' })
  iconPosition: 'left' | 'right';

  @Prop() iconOnly: boolean;

  get classes(): ClassNames {
    return [
      // `genre-${this.genre || VdStylableControl.GlobalGenre}`,
      // `theme-${this.theme}`,
      // this.plain ? `skin-plain` : `skin-${this.skin}`,
      // `size-${this.size}`,
      // `shape-${this.shape}`,
      // {
      //   loading: this.loading,
      //   wide: this.wide,
      // },
    ];
  }
}
</script>

