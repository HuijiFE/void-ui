import Vue, { CreateElement, VNode } from 'vue';
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
} from 'vue-property-decorator';

/**
 * Component: Apis
 */
@Component
export class VApis extends Vue {
  private render(h: CreateElement): VNode {
    return <div staticClass="v-apis">{this.$slots.default}</div>;
  }
}
