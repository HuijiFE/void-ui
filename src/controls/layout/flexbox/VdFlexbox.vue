<template>
  <div class="vd-flexbox"
       :class="classes">
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
import {
  FlexboxFlex,
  FlexboxGutter,
  FlexboxDirection,
  FlexboxJustify,
  FlexboxAlign,
} from 'src/controls/layout/flexbox/VdFlexbox';

@Component
export default class VdFlexboxbox extends Vue {
  @Prop({ type: [String, Number] })
  flex: FlexboxFlex;

  @Prop({ type: [String, Number] })
  flexXsmall: FlexboxFlex;

  @Prop({ type: [String, Number] })
  flexSmall: FlexboxFlex;

  @Prop({ type: [String, Number] })
  flexMedium: FlexboxFlex;

  @Prop({ type: [String, Number] })
  flexLarge: FlexboxFlex;

  @Prop({ type: [String, Number] })
  flexXlarge: FlexboxFlex;

  @Prop({ type: String })
  gutter: FlexboxGutter;

  @Prop({ type: String })
  direction: FlexboxDirection;

  @Prop({ type: String })
  justify: FlexboxJustify;

  @Prop({ type: String })
  align: FlexboxAlign;

  @Prop({ default: true, type: Boolean })
  wrapped: boolean;

  @Prop({ type: Boolean })
  hidden: boolean;

  @Prop({ type: Boolean })
  hiddenXsmall: boolean;

  @Prop({ type: Boolean })
  hiddenSmall: boolean;

  @Prop({ type: Boolean })
  hiddenMedium: boolean;

  @Prop({ type: Boolean })
  hiddenLarge: boolean;

  @Prop({ type: Boolean })
  hiddenXlarge: boolean;

  private get classes() {
    return [
      {
        [`flex-${this.flex}`]: this.flex,
        [`flex-xsmall-${this.flexXsmall}`]: this.flexXsmall,
        [`flex-small-${this.flexSmall}`]: this.flexSmall,
        [`flex-medium-${this.flexMedium}`]: this.flexMedium,
        [`flex-large-${this.flexLarge}`]: this.flexLarge,
        [`flex-xlarge-${this.flexXlarge}`]: this.flexXlarge,
        [`gutter-${this.gutter}`]: this.gutter,
        [`direction-${this.direction}`]: this.direction,
        [`justify-${this.justify}`]: this.justify,
        [`align-${this.align}`]: this.align,
        'wrapped-false': !this.wrapped,
        hidden: this.hidden,
        'hidden-xsmall': this.hiddenXsmall,
        'hidden-small': this.hiddenSmall,
        'hidden-medium': this.hiddenMedium,
        'hidden-large': this.hiddenLarge,
        'hidden-xlarge': this.hiddenXlarge,
      },
    ];
  }
}
</script>
