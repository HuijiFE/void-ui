<template>
  <router-link v-if="to"
               class="vd-subnav-item"
               exact
               exact-active-class="selected"
               :to="to"
               role="tab"
               @click="onClick">
    <slot>{{content}}</slot>
  </router-link>
  <button v-else
          class="vd-subnav-item"
          :class="classes"
          role="tab"
          @click="onClick">
    <slot>{{content}}</slot>
  </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { findParentComponent } from 'src/utils/componentUtils';
import VdSubnav from './VdSubnav.vue';

@Component
export default class VdSubnavItem extends Vue {
  get classes(): ClassNames {
    return [{ selected: this.isSelected }];
  }

  @Prop() content: string;

  @Prop() to: string | Location;

  @Prop({ required: true })
  value: string;

  parent: VdSubnav | undefined;

  get isSelected(): boolean {
    if (this.parent) {
      return this.parent.valueSource === this.value;
    }
    return false;
  }

  onClick() {
    if (this.parent) {
      this.parent.select(this);
    }
    this.$emit('click');
  }

  beforeMount() {
    this.parent = findParentComponent(this, VdSubnav);
    if (this.parent) {
      this.parent.addChild(this);
    }
  }
}
</script>
