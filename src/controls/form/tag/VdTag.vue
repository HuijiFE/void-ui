<template>
  <router-link v-if="to"
                class="vd-tag"
                :class="classes"
                :to="to"
                @click.stop="onClick">
    <slot>{{content}}</slot>
    <span v-if="closable"
          class="vd-tag_closs-button"
          aria-label="close"
          @click.stop="close">
      <i class="fa fa-times"></i>
    </span>
  </router-link>

  <a v-else-if="href"
      class="vd-tag"
      :class="classes"
      :href="href"
      @click.stop="onClick">
    <slot>{{content}}</slot>
    <span v-if="closable"
          class="vd-tag_closs-button"
          aria-label="close"
          @click.stop="close">
      <i class="fa fa-times"></i>
    </span>
  </a>

  <button v-else
          class="vd-tag"
          :class="classes"
          @click.stop="onClick">
    <slot>{{content}}</slot>
    <span v-if="closable"
          class="vd-tag_closs-button"
          aria-label="close"
          @click.stop="close">
      <i class="fa fa-times"></i>
    </span>
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';
import { TagValue } from 'src/controls/form/VdFormControl';
import { Location } from 'vue-router/types/router';

@Component
export default class VdTag extends VdStylableControl {
  get classes(): ClassNames {
    return [
      `theme-${this.theme || this.$void.theme}`,
      `skin-${this.skin}`,
      `size-${this.size}`,
    ];
  }

  @Prop() value: TagValue;

  @Prop() content: string;

  @Prop() href: string;

  @Prop() to: string | Location;

  @Prop() closable: boolean;

  onClick() {
    this.$emit('click');
  }

  close() {
    this.$emit('close');
  }
}
</script>
