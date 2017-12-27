<template>
  <div class="vd-collapse-item">
    <div class="item-head"
         @click="itemClick">
      <div class="head-content">
        <slot name="head">
          {{head}}
        </slot>
      </div>
      <span class="head-arrow"
            :class="status === 'hidden' ? '' : 'arrow-up'">></span>
    </div>
    <div class="item-body"
         :class="status === 'hidden' ? 'hidden' : ''">
      <div class="body-content">
        <slot name="content">
          {{content}}
        </slot>
      </div>
    </div>
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
import VdCollapse from './VdCollapse.vue';

@Component
export default class VdCollapseItem extends Vue {
  status: 'show' | 'hidden' = 'hidden';

  parent: VdCollapse;

  @Prop() content: string;

  @Prop() head: string;

  @Prop({ default: false })
  expand: boolean;

  itemClick() {
    this.parent.select(this);
  }
}
</script>


