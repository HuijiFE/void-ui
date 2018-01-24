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
  @Prop({ type: String })
  content: string;

  @Prop({ type: [String, Location] })
  to: string | Location;

  @Prop({ required: true, type: String })
  value: string;

  parent: VdSubnav | undefined;

  get classes(): ClassNames {
    return [{ selected: this.isSelected }];
  }

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
