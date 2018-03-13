<template>
  <div class="vd-card"
       :class="classes">
    <div class="vd-card_card-image"
         :style="imageStyle"
         :title="imageTitle"
         :alt="imageAlt"></div>
    <div class="vd-card_card-body">
      <slot name="head">
        <div class="vd-card_body-head">{{head}}</div>
      </slot>
      <slot name="content">
        <div class="vd-card_body-content">{{content}}</div>
      </slot>
      <slot name="description">
        <div class="vd-card_body-description">{{description}}</div>
      </slot>
      <slot name="card-control"></slot>
      <slot></slot>
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
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component
export default class VdCard extends VdStylableControl {
  @Prop() imageSource: string;

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
    return `background-image: url(${this.imageSource})`;
  }
}
</script>
