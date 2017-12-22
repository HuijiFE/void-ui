<template>
  <div class="vd-card"
       :class="classes">
    <div class="card-image"
         :style="imageStyle"
         :title="imageTitle"
         :alt="imageAlt"></div>
    <div class="card-body">
      <slot name="head">
        <div class="body-head">{{head}}</div>
      </slot>
      <slot name="content">
        <div class="body-content">{{content}}</div>
      </slot>
      <slot name="description">
        <div class="body-description">{{description}}</div>
      </slot>
    </div>
    <slot name="card-control"></slot>
    <slot></slot>
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
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdCard extends VdStylableControl {
  @Prop() imageSrc: string;

  @Prop() imageTitle: string;

  @Prop() imageAlt: string;

  @Prop() content: string;

  @Prop() description: string;

  @Prop() head: string;

  @Prop({ default: 'row' })
  direction: 'column' | 'row';

  get classes() {
    return [this.stylableClasses, `flex-${this.direction}`];
  }

  get imageStyle() {
    return `background-image: url(${this.imageSrc})`;
  }
}
</script>

