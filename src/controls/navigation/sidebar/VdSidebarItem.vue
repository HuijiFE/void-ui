<template>
  <a v-if="href"
     :href="href"
     :target="target"
     :rel="target === '_blank' ? 'noopener noreferrer' : ''"
     class="vd-sidebar-item"
     :class="classes">
    <span class="vd-sidebar-item_icon">
      <slot name="icon">
        <i class="fa"
           :class="`fa-${icon}`"></i>
      </slot>
    </span>
    <span class="vd-sidebar-item_content">
      <slot>{{content}}</slot>
    </span>
  </a>
  <router-link v-else-if="to"
               :to="to"
               class="vd-sidebar-item"
               :class="classes">
    <span class="vd-sidebar-item_icon">
      <slot name="icon">
        <i class="fa"
           :class="`fa-${icon}`"></i>
      </slot>
    </span>
    <span class="vd-sidebar-item_content">
      <slot>{{content}}</slot>
    </span>
  </router-link>
  <button v-else
          @click="onClick"
          class="vd-sidebar-item"
          :class="classes">
    <span class="vd-sidebar-item_icon">
      <slot name="icon">
        <i class="fa"
           :class="`fa-${icon}`"></i>
      </slot>
    </span>
    <span v-if="hasContent"
          class="vd-sidebar-item_content">
      <slot>{{content}}</slot>
    </span>
  </button>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdSidebarItem extends VdStylableControl {
  @Prop({ type: String })
  icon: string;

  @Prop({ type: String })
  content: string;

  @Prop({ type: String })
  href: string;

  @Prop({ default: '_blank', type: String })
  target: string;

  @Prop({ type: [String, Location] })
  to: string | Location;

  @Prop({ type: Boolean })
  branded: boolean | '';

  get isBranded(): boolean {
    return this.branded || this.branded === '';
  }

  get classes(): ClassNames {
    return [
      `size-${this.size}`,
      {
        branded: this.isBranded,
      },
    ];
  }

  get hasContent(): boolean {
    return !!this.content || !!this.$slots.default;
  }

  onClick(event: Event) {
    this.$emit('click', event);
  }
}
</script>
