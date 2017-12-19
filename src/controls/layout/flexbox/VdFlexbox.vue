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
  @Prop() flex: FlexboxFlex;
  @Prop() flexXsmall: FlexboxFlex;
  @Prop() flexSmall: FlexboxFlex;
  @Prop() flexMedium: FlexboxFlex;
  @Prop() flexLarge: FlexboxFlex;
  @Prop() flexXlarge: FlexboxFlex;

  @Prop() gutter: FlexboxGutter;
  @Prop() direction: FlexboxDirection;
  @Prop() justify: FlexboxJustify;
  @Prop() align: FlexboxAlign;

  @Prop({ default: true })
  wrapped: boolean;

  @Prop() hidden: boolean;
  @Prop() hiddenXsmall: boolean;
  @Prop() hiddenSmall: boolean;
  @Prop() hiddenMedium: boolean;
  @Prop() hiddenLarge: boolean;
  @Prop() hiddenXlarge: boolean;

  private get classes() {
    return [
      {
        [`flex-${this.flex}`]: this.flex,
        [`flex-xsmall-${this.flexXsmall}`]: this.flexXsmall,
        [`flex-small-${this.flexSmall}`]: this.flexSmall,
        [`flex-medium-${this.flexMedium}`]: this.flexMedium,
        [`flex-large-${this.flexLarge}`]: this.flexLarge,
        [`flex-xlarge-${this.flexXlarge}`]: this.flexXlarge,
      },

      `gutter-${this.gutter}`,
      `direction-${this.direction}`,
      `justify-${this.justify}`,
      `align-${this.align}`,

      {
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
