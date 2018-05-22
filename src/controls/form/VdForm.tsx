import {
  Vue,
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
import { VdControl } from '@void/controls/base/VdControl';

export interface FormWidget {
  id?: string;
  name?: string;
  label: string;
}

/**
 * Control Form
 */
@Component
export class VdForm extends VdControl {
  private render(h: CreateElement): VNode {
    return <div class="vd-form">{this.$slots.default}</div>;
  }
}
