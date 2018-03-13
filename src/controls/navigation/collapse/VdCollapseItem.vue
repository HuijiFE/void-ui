<template>
  <div class="vd-collapse_item">
    <div class="vd-collapse_item-head"
         @click="itemClick">
      <div class="vd-collapse_head-content">
        <slot name="head">
          {{head}}
        </slot>
      </div>
      <span class="vd-collapse_head-arrow"
            :class="status === 'hidden' ? '' : 'arrow-up'">
        <i class="fa fa-chevron-right"
           aria-hidden="true"></i>
      </span>
    </div>
    <div class="vd-collapse_item-body"
         :class="status === 'hidden' ? 'hidden' : ''">
      <div class="vd-collapse_body-content">
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
