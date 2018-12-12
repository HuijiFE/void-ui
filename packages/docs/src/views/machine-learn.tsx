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
 * Component: MachineLearn
 */
@Component
export class VMachineLearn extends Vue {
  private render(h: CreateElement): VNode {
    return (
      <div staticClass="v-machine-learn">
        <c-machine-learn />
      </div>
    );
  }
}
