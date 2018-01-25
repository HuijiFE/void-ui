<template>
  <div class="vd-radio-group"
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
import { RadioValue } from 'src/controls/form/VdFormControl';
import { VdStylableControl } from 'src/controls/base/VdControl';

@Component({
  model: {
    prop: 'valueSource',
    event: 'change',
  },
})
export default class VdRadioGroup extends VdStylableControl {
  @Prop({ type: [String, Number] })
  valueSource: RadioValue;

  @Prop({ default: 'radio', type: String })
  radioType: 'radio' | 'button';

  get classes() {
    return `type-${this.radioType}`;
  }
}
</script>
