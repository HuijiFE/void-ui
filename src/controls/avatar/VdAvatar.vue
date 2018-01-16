<template>
  <a v-if="href"
     class="vd-avatar"
     :href="href"
     :class="classes">

    <img :src="src">

  </a>
  <router-link v-else-if="to"
               :to="to"
               :class="classes"
               class="vd-avatar">

    <img :src="src">

  </router-link>
  <button v-else
          class="vd-avatar"
          :class="classes"
          @click="onClick">

    <img :src="src">

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
import {
  VdStylableControl,
  ControlSize,
  ControlTheme,
} from 'src/controls/base/VdControl';

@Component
export default class VdAvatar extends VdStylableControl {
  @Prop() src: string;
  @Prop() href: string;
  @Prop() to: string;

  get classes(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `size-${this.size}`,
      {
        bordered: this.isBordered,
      },
    ];
  }
  onClick() {
    this.$emit('click');
  }
}
</script>
