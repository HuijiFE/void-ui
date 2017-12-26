<template>
  <div class="vd-collapse-item">
    <div class="head"
         @click="itemClick">
      <slot name="head">
        {{head}}
      </slot>
    </div>
    <div class="item-body"
         :class="status === 'hidden' ? 'hidden' : ''">
      <slot name="body">
        {{body}}
      </slot>
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

@Component
export default class VdCollapseItem extends Vue {
  status: 'show' | 'hidden' = 'hidden';

  @Prop() body: string;
  @Prop() head: string;
  @Prop({ default: false })
  expand: boolean;

  itemClick() {
    this.$parent.$emit('item-click', this);
  }
}
</script>


