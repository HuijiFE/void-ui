<template>
  <a v-if="href"
     class="vd-button"
     :class="classes"
     :href="href"
     :target="target"
     :rel="target === '_blank' ? 'noopener noreferrer' : ''"
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
    <input type="checkbox"
           :value="model" />
    <span>{{value}}</span>
  </a>

  <router-link v-else-if="to"
               class="vd-button"
               :class="classes"
               :disabled="disabled">
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
  @Prop({ default: 'button', type: String })
  type: string;

  @Prop({ type: String })
  href: string;

  @Prop({ default: '_blank', type: String })
  target: string;

  @Prop({ type: [String, Location] })
  to: string | Location;

  @Prop({ type: String })
  loading: boolean;

  @Prop({ type: String })
  wide: boolean;

  @Prop({ type: String })
  icon: string;

  @Prop({ default: 'left', type: String })
  iconPosition: 'left' | 'right';

  @Prop() iconOnly: boolean;

  get classes(): ClassNames {
    return [
      ...this.stylableClasses,
      {
        loading: this.loading,
        wide: this.wide,
      },
    ];
  }

  onClick() {
    this.$emit('click');
  }
}
</script>
